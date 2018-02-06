import { Component } from '@angular/core';

  @Component({
    selector: 'app-editor',
    templateUrl: './app.component.html'
})

export class EditorComponent {
  private ckeditorContent: string;
  constructor() {
    this.ckeditorContent = `<p>Greetings from CKEditor...</p>`;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';

}
