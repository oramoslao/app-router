import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { InspectionsComponent } from './components/inspections/inspections.component';
import { OverviewComponent } from './components/overview/overview.component';
import { EndpointsComponent } from './components/endpoints/endpoints.component';
import { SafetyComponent } from './components/safety/safety.component';
import { WorkflowsComponent } from './components/workflows/workflows.component';
import { TaskModule } from './task/task.module';
// import { MyTasksComponent } from './components/my-tasks/my-tasks.component';
// import { TasksUnassignedComponent } from './components/tasks-unassigned/tasks-unassigned.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProgramsComponent,
    InspectionsComponent,
    SafetyComponent,
    OverviewComponent,
    WorkflowsComponent,
    EndpointsComponent,
    // MyTasksComponent,
    // TasksUnassignedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
