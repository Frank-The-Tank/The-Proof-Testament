import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { AppComponent, Editor } from './app.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { FooterComponent } from './footer/footer.component';

import { environment } from './../environments/environment';
import { BibleComponent } from './bible/bible.component';
import {BibleService} from './bible/bible.service';
import { ScrollableDirective } from './directives/scrollable.directive';

@NgModule({
  declarations: [
    AppComponent,
    Editor,
    BibleComponent,
    FooterComponent,
    ScrollableDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    InfiniteScrollModule
  ],
  providers: [BibleService],
  bootstrap: [AppComponent, BibleComponent, FooterComponent]
})
export class AppModule { }
