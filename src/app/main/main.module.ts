import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EndpointsComponent } from './components/endpoints/endpoints.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    DashboardComponent,
    EndpointsComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
