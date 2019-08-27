import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Brand } from '../core/brand'
import {BRANDS} from '../core/mock-brands'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private MessageService: MessageService) { }
  
  getBrands(): Observable<Brand[]>{
    this.MessageService.add('BrandService: fetched brands');
    return of(BRANDS);
  } 
}
