import { Component, OnInit, Input } from '@angular/core';
import { Brand } from '../../core/brand';

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.scss']
})
export class BrandDetailComponent implements OnInit {
  @Input() brand :Brand;
  constructor() { }

  ngOnInit() {
  }
  

}
