
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
import { EstiloComponent } from './estilo/estilo.component';
import {InicioComponent} from "./Componentes/inicio/inicio.component";
import { PlanetaStarWarsComponent } from './Componentes/planeta-star-wars/planeta-star-wars.component';
import { HeroesDota2Component } from './Componentes/heroes-dota2/heroes-dota2.component';


@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    InicioComponent,
    PlanetaStarWarsComponent,
    HeroesDota2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    // http
  ],
  bootstrap: [InicioComponent]
})


export class AppModule { }
