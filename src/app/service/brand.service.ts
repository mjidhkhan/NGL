import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Brand } from '../core/brand'
import {BRANDS} from '../core/mock-brands'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private messageService: MessageService) { }

  getBrands(): Observable<Brand[]>{
    this.messageService.add('BrandService: fetched brands');
    return of(BRANDS);
  }
  
  getBrand(id: number): Observable<Brand>{
    this.messageService.add(`BrandService: fetched brand id=${id}`);
    return of(BRANDS.find(brand => brand.id === id));
  }

}
