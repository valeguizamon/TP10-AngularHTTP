import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { HomeComponent } from './components/home/home.component';
import { InstrumentoAdminComponent } from './components/instrumento-admin/instrumento-admin.component';
import { InstrumentoListaComponent } from './components/instrumento-lista/instrumento-lista.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'instrumentos', component: InstrumentosComponent },
    { path: 'detalleInstrumento/:id', component: DetalleInstrumentoComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: 'lista', component: InstrumentoListaComponent },
    { path: 'admin/:id', component: InstrumentoAdminComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
