import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { MyTasksComponent } from './components/my-tasks/my-tasks.component';
import { UnassignedTasksComponent } from './components/unassigned-tasks/unassigned-tasks.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    data: {
      breadcrumb: 'Tasks',
      isLabel: true
    },
    children: [
      {
        path: 'my-tasks',
        component: MyTasksComponent,
        data: {
          // breadcrumb: 'My Tasks'
          breadcrumb: ''
        }
      },
      {
        path: 'unassigned-tasks',
        component: UnassignedTasksComponent,
        data: {
          // breadcrumb: 'Unassigned'
          breadcrumb: ''
        }
      },
      {
        path: 'all-tasks',
        component: AllTasksComponent,
        data: {
          // breadcrumb: 'All Tasks'
          breadcrumb: ''
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
