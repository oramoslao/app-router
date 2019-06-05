import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { MyTasksComponent } from './components/my-tasks/my-tasks.component';
import { UnassignedTasksComponent } from './components/unassigned-tasks/unassigned-tasks.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';

@NgModule({
  declarations: [
    TaskComponent,
    MyTasksComponent,
    UnassignedTasksComponent,
    AllTasksComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
