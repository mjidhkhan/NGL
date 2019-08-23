import { Component, OnInit, Input, Output, EventEmitter, ɵisListLikeIterable } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() public label;
  @Output() public checked;
  @Output() public checkedChanged = new EventEmitter();

  public onCheckedChange(checked){
    this.checkedChanged.next(checked)
  }

}
