import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsComponent } from './components/programs/programs.component';
import { InspectionsComponent } from './components/inspections/inspections.component';
import { OverviewComponent } from './components/overview/overview.component';
import { WorkflowsComponent } from './components/workflows/workflows.component';
import { SafetyComponent } from '../main/components/safety/safety.component';

const routes: Routes = [
  {
    path: 'programs',
    component: ProgramsComponent,
    data: {
      breadcrumb: 'Programs'
    },
    children: [
      {
        path: 'inspections',
        component: InspectionsComponent,
        data: {
          breadcrumb: 'Inspections'
        },
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

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
