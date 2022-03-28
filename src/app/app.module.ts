import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ControlComponent } from './control/control.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { HumedadComponent } from './humedad/humedad.component';
import { LuzComponent } from './luz/luz.component';
import { MovimientoComponent } from './movimiento/movimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ControlComponent,
    TemperaturaComponent,
    HumedadComponent,
    LuzComponent,
    MovimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
