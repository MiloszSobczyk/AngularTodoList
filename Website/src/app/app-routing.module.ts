import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskEditorComponent } from './task-editor/task-editor.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';

const routes: Routes = [
  {
    path: 'edit',
    component: TaskEditorComponent
  },
  {
    path: '',
    component: MainWrapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
