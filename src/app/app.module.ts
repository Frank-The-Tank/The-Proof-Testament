import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent} from './app.component';
import { EditorComponent } from './editor/editor.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { FooterComponent } from './footer/footer.component';

import { environment } from './../environments/environment';
import { BibleComponent } from './bible/bible.component';
import {BibleService} from './bible/bible.service';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    BibleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [BibleService],
  bootstrap: [AppComponent,EditorComponent, BibleComponent, FooterComponent]
})
export class AppModule { }
