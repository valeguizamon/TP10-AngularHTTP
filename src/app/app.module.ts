import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HomeComponent } from './components/home/home.component';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { ItemInstrumentoComponent } from './components/item-instrumento/item-instrumento.component';
import { InstrumentoAdminComponent } from './components/instrumento-admin/instrumento-admin.component';
import { InstrumentoListaComponent } from './components/instrumento-lista/instrumento-lista.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    HomeComponent,
    DetalleInstrumentoComponent,
    ItemInstrumentoComponent,
    InstrumentoAdminComponent,
    InstrumentoListaComponent,
    InstrumentosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
