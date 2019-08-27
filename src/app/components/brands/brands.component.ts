import { Component, OnInit } from '@angular/core';

import{Brand} from '../../core/brand';
//import { BRANDS } from '../../core/mock-brands';
import {BrandService}  from '../../service/brand.service'

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brands: Brand[];
  selectedBrand : Brand;
  constructor(private brandService: BrandService) { } 

  ngOnInit() {
    this.getBrands();
  }

  onSelect(brand: Brand): void{
    this.selectedBrand = brand;
    console.log(this.selectedBrand)
  }

  getBrands(): void {
    this.brandService.getBrands()
        . subscribe(brands => this.brands = brands)
  }

}
