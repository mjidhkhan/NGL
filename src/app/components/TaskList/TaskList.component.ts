import { Component, OnInit } from '@angular/core';

import { TaskComponent } from './Task/Task.component';
import { NewTaskComponent } from './NewTask/NewTask.component';

@Component({
  selector: 'app-TaskList',
  templateUrl: './TaskList.component.html',
  styleUrls: ['./TaskList.component.scss'],
  
})
export class TaskListComponent implements OnInit {
  public tasks;

  constructor() {
    this.tasks = [
      {title:'Task 1', done:true},
      {title:'Task 2', done:false},
      {title:'Task 3', done:false},
      {title:'Task 4', done:true},
    ]
   }

  ngOnInit() {
  }

  addTask(title){
    this.tasks.push({
      title, done:false
    })
  }


}
