import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/TaskList/TaskList.component'
import { TaskComponent } from './components/TaskList/Task/Task.component'
import { NewTaskComponent } from './components/TaskList/NewTask/NewTask.component';
import { CheckBoxComponent } from './components/ui/check-box/check-box.component';
import { ToggleComponent } from './components/ui/toggle/toggle.component';
import { ButtonComponent } from './components/ui/button/button.component'




@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    NewTaskComponent,
    CheckBoxComponent,
    ToggleComponent,
    ButtonComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

