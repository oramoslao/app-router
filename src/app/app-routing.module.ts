import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { InspectionsComponent } from './components/inspections/inspections.component';
import { OverviewComponent } from './components/overview/overview.component';
import { EndpointsComponent } from './components/endpoints/endpoints.component';
import { SafetyComponent } from './components/safety/safety.component';
import { WorkflowsComponent } from './components/workflows/workflows.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'programs',
    component: ProgramsComponent,
    children: [
      {
        path: 'inspections',
        component: InspectionsComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'overview'
          },
          {
            path: 'overview',
            component: OverviewComponent
          },
          {
            path: 'workflows',
            component: WorkflowsComponent
          }
        ]
      },
      {
        path: 'safety',
        component: SafetyComponent
      }
    ]
  },
  {
    path: 'endpoints',
    component: EndpointsComponent
  },
  {
    path: 'tasks',
    component: EndpointsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
