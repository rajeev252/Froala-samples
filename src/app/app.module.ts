import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';

 import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/video.min.js';
import './../assets/js/img.min.js'
// import './../assets/js/video.min.js'
// import './../assets/css/font-awesome.min.css'
// import './../assets/css/froala_style.min.css'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    FroalaEditorModule, FroalaViewModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
