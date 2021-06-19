import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstrumentoService } from 'src/app/services/instrumento.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  instrumentoBusqueda:any = [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute, private serviceInstrumento:InstrumentoService, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.termino = params['termino'];
      this.serviceInstrumento.getInstrumentosBusquedaFromDataBase(this.termino)
      .subscribe(dataInstrumentos => {
        this.instrumentoBusqueda = [];
        for(let instrumento in dataInstrumentos){
          this.instrumentoBusqueda.push(dataInstrumentos[instrumento]);
        }
      });
    });
  }

  public verPlato(idx:string){
    this.router.navigate(['/detalleInstrumento', idx])
  }
}

