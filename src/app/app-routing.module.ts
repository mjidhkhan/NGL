import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandsComponent } from './components/brands/brands.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrandDetailComponent } from './components/brand-detail/brand-detail.component';


const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'detail/:id', component:BrandDetailComponent},
  {path:'brands', component:BrandsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
