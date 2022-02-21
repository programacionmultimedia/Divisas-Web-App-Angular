import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {


 
  @Input() tablaVisible: boolean = false;

  @Input() simbolo: string = "";
  @Input() simboloInicial:string="";
  @Input() rate:number=0;
  @Input() monedaFinal:string="";
  @Input() monedaInicial:string="";


cantidadesConversion= [
  { valor: 1 },
  { valor: 5 },
  { valor: 10 },
  { valor: 25 },
  { valor: 100 },
  { valor: 500 },
  { valor: 1000 },
  { valor: 5000 },
  { valor: 1000 },
  { valor: 5000 },
  { valor: 10000 },
  { valor: 50000 }


];


constructor() { }

ngOnInit(): void {
}

}
