import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FooterComponent } from './footer/footer.component';

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

@NgModule({
  declarations: [
    AppComponent,
    BibleComponent,
    FooterComponent,
    ScrollableDirective,
    NavbarComponent,
    BibleFilterPipe,
    TheoremsListComponent,
    EditorComponent,
    AboutComponent,
    HomeComponent,
    AboutUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    QuillModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [BibleService],
  bootstrap: [AppComponent, BibleComponent, FooterComponent, NavbarComponent,
    EditorComponent, HomeComponent, AboutComponent, AboutUserComponent]
})
export class AppModule { }
