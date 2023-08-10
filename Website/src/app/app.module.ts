import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskGroupsComponent } from './task-groups/task-groups.component';
import { TaskComponent } from './task/task.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { TaskCreatorComponent } from './task-creator/task-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskGroupsComponent,
    TaskComponent,
    TaskEditorComponent,
    MainWrapperComponent,
    TaskCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
