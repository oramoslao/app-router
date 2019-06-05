import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task.component';
import { MyTasksComponent } from './components/my-tasks/my-tasks.component';
import { UnassignedTasksComponent } from './components/unassigned-tasks/unassigned-tasks.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    children: [
      {
        path: 'my-tasks',
        component: MyTasksComponent
      },
      {
        path: 'unassigned-tasks',
        component: UnassignedTasksComponent
      },
      {
        path: 'all-tasks',
        component: AllTasksComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
