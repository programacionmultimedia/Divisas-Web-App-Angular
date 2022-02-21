import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDivisaService {

 // url = "https://api.exchangeratesapi.io/v1/convert?access_key=7f8a01e0311a2e7ca6322b5e49145c74&from=GBP&to=JPY&amount=25";
 url = "http://www.floatrates.com/daily/";
 /*  https://api.exchangeratesapi.io/v1/
 convert ? access_key = 7f8a01e0311a2e7ca6322b5e49145c74
    & from = GBP
    & to = JPY
    & amount = 25 */

  cabeceras = new HttpHeaders({ "Content-type": "application/json" });

  constructor(private http: HttpClient) { }
  public getAll() {
    return this.http.get(this.url, { headers: this.cabeceras })

  }
  public solicitarCambio(monedaInicial:string){
    let otraUrl=this.url+monedaInicial+".json";
    //return this.http.get(otraUrl,{headers:this.cabeceras})
    return this.http.get(otraUrl,{headers:this.cabeceras}) 
  }


}
