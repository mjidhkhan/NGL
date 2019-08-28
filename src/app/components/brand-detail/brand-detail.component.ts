import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Brand } from '../../core/brand';
import { BrandService } from './../../service/brand.service';

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.scss']
})
export class BrandDetailComponent implements OnInit {
  brand: Brand;

  constructor(
    private route: ActivatedRoute,
    private brandService: BrandService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBrand();
  }
  
  getBrand():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.brandService.getBrand(id)
    .subscribe(brand => this.brand = brand)
  }

  goBack():void{
    this.location.back();
  }

}
