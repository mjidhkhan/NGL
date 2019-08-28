import { Component, OnInit } from '@angular/core';
import { Brand } from './../../core/brand';
import { BrandService } from './../../service/brand.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  brands: Brand[] = [];
  constructor(private brandService: BrandService) { }

  ngOnInit() {
    this.getBrands();
  }

  getBrands(): void {
    this.brandService.getBrands()
        .subscribe(brands => this.brands = brands.slice(1,5))
  }

}
