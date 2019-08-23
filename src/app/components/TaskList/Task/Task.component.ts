import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-Task',
  templateUrl: './Task.component.html',
  styleUrls: ['./Task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() public task;
 
}
