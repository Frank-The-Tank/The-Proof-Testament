import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent, Editor } from './app.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { FooterComponent } from './footer/footer.component';
>>>>>>> layout

import { environment } from './../environments/environment';
import { BibleComponent } from './bible/bible.component';

@NgModule({
  declarations: [
    AppComponent,
    Editor,
    BibleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [],
<<<<<<< HEAD
  bootstrap: [AppComponent, BibleComponent]
=======
  bootstrap: [AppComponent, FooterComponent]
>>>>>>> layout
})
export class AppModule { }
