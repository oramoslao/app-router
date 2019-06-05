import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  totalTasks: number | null;
  constructor() {
    this.totalTasks = 32;
  }

  ngOnInit() {
  }

}
