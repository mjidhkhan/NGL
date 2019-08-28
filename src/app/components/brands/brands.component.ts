import { Component, OnInit } from '@angular/core';

import{Brand} from '../../core/brand';
import {BrandService}  from '../../service/brand.service'

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brands: Brand[];
 
  constructor(private brandService: BrandService) { } 

  ngOnInit() {
    this.getBrands();
  }

  getBrands(): void {
    this.brandService.getBrands()
        . subscribe(brands => this.brands = brands)
  }

}
