import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
// Modules UI
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatButtonModule, MatMenuModule, MatIconModule, MatDividerModule, MatTooltipModule, 
  MatDialogModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatSnackBarModule,
  MatListModule, MatSelectModule, MatSlideToggleModule, MatRippleModule,MatCardModule, MatToolbarModule, MatGridListModule } from '@angular/material';

// Components Application Related
import { BrandsComponent } from './components/brands/brands.component';
import { BrandDetailComponent } from './components/brand-detail/brand-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Route Module
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    // Brands
    BrandsComponent,
    BrandDetailComponent,
    MessagesComponent,
    MessagesComponent,
    DashboardComponent
   
   
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

