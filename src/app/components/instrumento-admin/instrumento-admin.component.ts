import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Instrumento } from 'src/app/entidades/Instrumento';
import { InstrumentoService } from 'src/app/services/instrumento.service';

@Component({
  selector: 'app-instrumento-admin',
  templateUrl: './instrumento-admin.component.html',
  styleUrls: ['./instrumento-admin.component.css']
})
export class InstrumentoAdminComponent implements OnInit {

  instrumento:Instrumento = {
    id:"0",
    instrumento:"",
    precio:"",
    descripcion:"",
    imagenPath:""
  };
  new = false;
  idInstrumento: string;
  resultadoOperacion = "";
  
  constructor(private servicioInstrumento:InstrumentoService, private router:Router, private activeRoute:ActivatedRoute) {
    this.activeRoute.params
    .subscribe(
      parametros => {
        this.idInstrumento = parametros['id'];
        if(this.idInstrumento != "nuevo"){
          servicioInstrumento.getInstrumentoEnBaseDatosXId(this.idInstrumento)
          .subscribe(platoEncontrado => this.instrumento = platoEncontrado as Instrumento);
        }else{
          console.log("ES NUEVO");
        }
      }
    );

  }

  ngOnInit() {
  }

  save() {
    if(!this.validarSiNumero(this.instrumento.precio)){
      this.resultadoOperacion = ("Ingrese un numero para el precio.");
      return;
    }
    if ( this.idInstrumento === 'nuevo') {
      console.log('nuevo');
      this.servicioInstrumento.newInstrumento(this.instrumento)
        .subscribe( data => {
          if(data && data.id){
            this.resultadoOperacion = "Operación finalizada con exito";
            this.router.navigate(['/lista']);
          }else{
            this.resultadoOperacion = "Error en la operación, verifique los datos";
          }
        },
        error => console.error(error));
    } else {
      console.log(`Update ${ this.idInstrumento }`);
      this.servicioInstrumento.updatePlato(this.instrumento)
        .subscribe( data => {
          if(data && data.id){
            this.resultadoOperacion = "Operación finalizada con exito";
            this.router.navigate(['/lista']);
            console.log(data);
          }else{
            this.resultadoOperacion = "Error en la operación, verifique los datos";
          }         
        },
        error => console.error(error));
    }
  }


  addNew(formu: NgForm) {
    this.router.navigate(['/admin', 'nuevo']);
    formu.reset({
      id:"0",
      instrumento:"",
      precio:"",
      descripcion:"",
      imagenPath:""
    });
  }

  validarSiNumero(numero:string):boolean{
    if(!/^([0-9])*$/.test(numero)) 
        return false;
    return true;
    
  }
  
}
