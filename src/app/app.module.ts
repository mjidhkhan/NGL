import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


// Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatButtonModule, MatMenuModule, MatIconModule, MatDividerModule, MatTooltipModule, 
  MatDialogModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatSnackBarModule,
  MatListModule, MatSelectModule, MatSlideToggleModule, MatRippleModule,MatCardModule, MatToolbarModule, MatGridListModule } from '@angular/material';

// Components Application Related
import { BrandsComponent } from './components/brands/brands.component';
import { BrandDetailComponent } from './components/brand-detail/brand-detail.component';





@NgModule({
  declarations: [
    AppComponent,
    
    // Brands
    BrandsComponent,
    BrandDetailComponent,
   
   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatDialogModule,
    MatTooltipModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatRippleModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

