import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServicioDivisaService } from './services/servicio-divisa.service';
import { TranslateService } from '@ngx-translate/core';
import { FooterComponent } from './components/footer/footer.component';
import { TablaComponent } from './components/tabla/tabla.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  //cambio: any = [];
  importe: any;
  importeTemporal: number = 0;
  nodo: any = {};
  rate: number = 0;
  resultado: number = 0;
  monedaInicial: string = "";
  monedaFinal: string = "";
  botonDeshabilitado: boolean = true;
  simbolo: string = "";
  simboloInicial: string = "";
  idioma: string = 'es';
  inglesDeshabilitado: boolean = false;
  espanolDeshabilitado: boolean = true;
  fecha: number = Date.now();
  tablaVisible: boolean = false;
  aux:boolean=true;

  


  paises = [
    { id: "eur", name: "€ Euro", simbolo: "€" },
    { id: "usd", name: "$ Dollar", simbolo: "$" },
    { id: "gbp", name: "£ Pound", simbolo: "£" }


  ];


  constructor(private servicioDivisaService: ServicioDivisaService, private translateService: TranslateService) {
    this.translateService.use(this.idioma);
  }

  //****************************************
  solicitarCambio() {
    if (!this.validar()) {
      //this.resultado=this.importe;
      this.botonDeshabilitado = true;

    } else {


      this.servicioDivisaService.solicitarCambio(this.monedaInicial).subscribe((item) => {

        this.nodo = item;
        console.log("Moneda inicial " + this.monedaInicial);
        console.log("Moneda final " + this.monedaFinal);
        //console.log("que es: "+this.nodo.usd.code);
        //console.log("que es: "+this.nodo.usd.name);
        //console.log("que es: "+this.nodo);
        console.log("Rate " + this.nodo[this.monedaFinal].rate);

        this.importe = parseFloat(this.importe);
        this.rate = this.nodo[this.monedaFinal].rate;

        this.resultado = this.importe * this.rate;
        this.fecha = this.getDate();
        this.importeTemporal = this.importe;
        this.tablaVisible = true;


        this.scroll('calculo');

        this.paises.forEach(element => {
          if (element.id == this.monedaInicial) {
            this.simboloInicial = element.simbolo;
          }
          if (element.id == this.monedaFinal) {
            this.simbolo = element.simbolo;
          }

        })




      });

    }

  }
  //****************************************
  habilitarCambio() {

    if (!this.validar()) {
      this.botonDeshabilitado = true;
      
    } else {
      this.botonDeshabilitado = false;


    }
  }
  //****************************************
  validar() {
    if (this.monedaFinal == this.monedaInicial
      || parseFloat(this.importe) == 0
      || this.monedaFinal == ""
      || this.monedaInicial == ""
      || isNaN(parseFloat(this.importe))


    ) {
      return false;
    } else {
      return true;

    }

  }
  //****************************************
  cambiarIdioma(nuevoIdioma: string) {
    this.idioma = nuevoIdioma;
    this.translateService.use(this.idioma);
    if (this.idioma == "es") {
      this.inglesDeshabilitado = false;
      this.espanolDeshabilitado = true;

    } else {
      this.inglesDeshabilitado = true;
      this.espanolDeshabilitado = false;
    }
  }
  //****************************************
  getDate() {
    let fechaHoy: number = Date.now();
    return fechaHoy;
  }

  //****************************************
  getSimbolo(id: string) {

    this.paises.forEach(element => {
      if (element.id == id) {
        this.simboloInicial = element.simbolo;
      }

    })
  }

  scroll(id: string) {

    let el: any = document.getElementById(id);


    el.scrollIntoView({ behavior: "smooth" });
  }



}
