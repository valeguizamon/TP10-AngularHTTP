import { Injectable } from '@angular/core';
//import  *  as  data  from  'src/assets/datos/platos.json';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Instrumento } from '../entidades/Instrumento';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {

  //platosFile:any  = (data  as  any).default;
  public instrumentoData:Instrumento[]=[];
  public instrumentoEncontrado:Instrumento;

  constructor(public http: HttpClient) {
    console.log("Servicio Cargado!!!");
   }
   
  public getInstrumentos():any[]{
    return this.instrumentoData;
  }

  public getInstrumentoXId(idx:string):any{
      for(let instrumento of this.instrumentoData){
          if(instrumento.id == idx){
            return instrumento;
          } 
      }
  }

  //lee todos los instrumentos  
  getInstrumentosFromDataBase(){
    return this.http.get("http://localhost:8081/WebAppServer/RestoServlet?action=listar").pipe(
      map( instrumentoData => instrumentoData));
  }

  //busca un instrumento por el id
  getInstrumentoEnBaseDatosXId(idx:string){
    return this.http.get("http://localhost:8081/WebAppServer/RestoServlet?action=buscar&idPlato=" + idx).pipe(
      map( instrumentoEncontrado => instrumentoEncontrado));
  }

  //busca los instrumentos por un termino de busqueda
  getInstrumentosBusquedaFromDataBase(termino:string){
    return this.http.get("http://localhost:8081/WebAppServer/RestoServlet?action=busqueda&termino=" + termino).pipe(
      map( instrumentoSearch => instrumentoSearch));
  }

  instrumentoAdminUrl:string = "http://localhost:8081/WebAppServer/RestoServlet";
  newInstrumento( instrumentoNuevo: Instrumento) {
    return this.http.post<Instrumento>( this.instrumentoAdminUrl, null, {params: new HttpParams().set("action", "insertar").set("id", "0")
    .set("nombre", instrumentoNuevo.nombre).set("imagenPath", instrumentoNuevo.imagenPath).set("precio", instrumentoNuevo.precio).set("rubro", instrumentoNuevo.rubro)
    }).pipe(map( nuevoPlato => {
            console.log(nuevoPlato.nombre);
            return nuevoPlato;
          }));
  }



   updatePlato( instrumentoUpdate: Instrumento) {
      return this.http.post<Instrumento>( this.instrumentoAdminUrl, null, {params: new HttpParams().set("action", "actualizar").set("id", instrumentoUpdate.id)
      .set("nombre", instrumentoUpdate.nombre).set("imagenPath", instrumentoUpdate.imagenPath).set("precio", instrumentoUpdate.precio).set("rubro", instrumentoUpdate.rubro)
      }).pipe(map( res => {
              console.log(res.nombre);
              return res;
            }));
    }

    deletePlato(idPlato: string){
      return this.http.post( this.instrumentoAdminUrl, null, {params: new HttpParams().set("action", "eliminar").set("id", idPlato)})
            .pipe(
            map( res => {
              console.log(res);
              return res;
            }));
    }



}


