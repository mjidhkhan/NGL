import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeComponent } from './components/jokes/joke/joke.component';
import { JokeFormComponent } from './components/jokes/JokeForm/JokeForm.component';
import { JokeListComponent } from './components/jokes/JokeList/JokeList.component';



@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeFormComponent,
    JokeListComponent,
    
   
  ],
  imports: [
  
BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

