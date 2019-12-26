import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { TextEditorComponent } from './text-editor/text-editor.component';


const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'test', component: TextEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
