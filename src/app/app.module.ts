import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';

import { AppComponent, SampleEditor } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    SampleEditor
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
