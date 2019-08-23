import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-NewTask',
  templateUrl: './NewTask.component.html',
  styleUrls: ['./NewTask.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() public taskEntered = new EventEmitter();

  public enterTask(titleInput){
    this.taskEntered.next(titleInput.value);
    titleInput.value ='';
    titleInput.focus();

  }

}
