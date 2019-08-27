import { Component, OnInit } from '@angular/core';

import{Brand} from '../../core/brand';
import { BRANDS } from '../../core/mock-brands';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brands = BRANDS;
  selectedBrand : Brand;
  constructor() { } 

  ngOnInit() {
    
  }

  onSelect(brand: Brand): void{
    this.selectedBrand = brand;
    console.log(this.selectedBrand)
  }

}
