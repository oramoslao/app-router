import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';

import { ProgramsComponent } from './components/programs/programs.component';
import { InspectionsComponent } from './components/inspections/inspections.component';
import { OverviewComponent } from './components/overview/overview.component';
import { WorkflowsComponent } from './components/workflows/workflows.component';
import { SafetyComponent } from '../main/components/safety/safety.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProgramsComponent,
    InspectionsComponent,
    OverviewComponent,
    WorkflowsComponent,
    SafetyComponent,
  ],
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    SharedModule
  ]
})
export class ProgramsModule { }
