import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent, Editor } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { FooterComponent } from './components/footer/footer.component';

import { environment } from './../environments/environment';
import { BibleComponent } from './components/bible/bible.component';
import {BibleService} from './components/bible/bible.service';
import { ScrollableDirective } from './directives/scrollable.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BibleFilterPipe } from './pipes/bible-filter.pipe';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { TheoremsListComponent } from './components/theorems-list/theorems-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Editor,
    BibleComponent,
    FooterComponent,
    ScrollableDirective,
    NavbarComponent,
    BibleFilterPipe,
    TheoremsListComponent
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
  providers: [BibleService],
  bootstrap: [AppComponent, BibleComponent, FooterComponent, NavbarComponent]
})
export class AppModule { }
