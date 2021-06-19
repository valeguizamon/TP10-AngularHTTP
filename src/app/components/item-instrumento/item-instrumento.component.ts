import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Instrumento } from 'src/app/entidades/Instrumento';


@Component({
  selector: 'app-item-instrumento',
  templateUrl: './item-instrumento.component.html',
  styleUrls: ['./item-instrumento.component.css']
})
export class ItemInstrumentoComponent implements OnInit {

  @Input() instrumentoAux:Instrumento;
  @Input() index:number;

  //entre <> tiene que asignarse el tipo de dato a emitir
  //puede ser un object, string, number, etc
  @Output() instrumentoSeleccionado:EventEmitter<number>;//number es el index
  
  constructor(private router:Router) {
    this.instrumentoSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  public verInstrumento(){
    console.log(this.index);
    //this.router.navigate(['/detallePlato', this.index])
    this.instrumentoSeleccionado.emit(this.index);
  }

}
