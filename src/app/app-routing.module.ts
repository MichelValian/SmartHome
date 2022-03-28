import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlComponent } from './control/control.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { HumedadComponent } from './humedad/humedad.component';
import { LuzComponent } from './luz/luz.component';
import { MovimientoComponent } from './movimiento/movimiento.component';

const routes: Routes = [
  {
    component: ControlComponent, 
    path: 'control'
  },
  {
    component: TemperaturaComponent, 
    path: 'temperatura'
  },
  {
    component: HumedadComponent, 
    path: 'humedad'
  },
  {
    component: LuzComponent, 
    path: 'luz'
  },
  {
    component:  MovimientoComponent, 
    path: 'movimiento'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
