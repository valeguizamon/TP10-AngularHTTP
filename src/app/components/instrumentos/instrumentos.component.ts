import { Component, OnInit } from '@angular/core';
import { InstrumentoService } from 'src/app/services/instrumento.service';
import { Router } from '@angular/router';
import { Instrumento } from 'src/app/entidades/Instrumento';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.css']
})
export class InstrumentosComponent implements OnInit {

  instrumentosArr :Instrumento[]=[];
  loading = true;

  constructor(private servicioInstrumento:InstrumentoService, private router:Router) { }

  ngOnInit(): void {

    this.servicioInstrumento.getInstrumentosFromDataBase()
    .subscribe(dataInstrumentos => {
      for(let instrumento in dataInstrumentos){
        this.instrumentosArr.push(dataInstrumentos[instrumento]);
      }
      this.loading = false;
    });

  }

  public verInstrumento(idx:string){
    console.log("ID Instrumento " + idx);
    this.router.navigate(['/detalleInstrumento', idx])
  }

}
