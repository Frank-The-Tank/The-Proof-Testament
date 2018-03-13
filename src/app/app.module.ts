import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';



import { environment } from './../environments/environment';
import { BibleComponent } from './components/bible/bible.component';
import {BibleService} from './components/bible/bible.service';
import { ScrollableDirective } from './directives/scrollable.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BibleFilterPipe } from './pipes/bible-filter.pipe';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { TheoremsListComponent } from './components/theorems-list/theorems-list.component';
import { EditorComponent } from './components/editor/editor.component';
import {RouterModule} from '@angular/router';
import {routerConfig} from './router.config';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUserComponent } from './components/about-user/about-user.component';

import { QuillModule } from 'ngx-quill';
import { AutocompleteBoxComponent } from './components/autocomplete-box/autocomplete-box.component';



@NgModule({
  declarations: [
    AppComponent,
    BibleComponent,
    ScrollableDirective,
    NavbarComponent,
    BibleFilterPipe,
    TheoremsListComponent,
    EditorComponent,
    AboutComponent,
    HomeComponent,
    AboutUserComponent,
    AutocompleteBoxComponent
  ],
  entryComponents: [ // Components that are added dynamically to page
    EditorComponent,
    AutocompleteBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    QuillModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [BibleService],
  bootstrap: [AppComponent, BibleComponent, NavbarComponent,
    EditorComponent, HomeComponent, AboutComponent, AboutUserComponent]
})
export class AppModule { }
