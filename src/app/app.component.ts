import { Component } from '@angular/core';

  @Component({
    selector: 'editor',
    template: `
    <ckeditor
      [(ngModel)]="ckeditorContent"
      [config]="{uiColor: '#a4a4a4'}"
      (change)="onChange($event)"
      (ready)="onReady($event)"
      (focus)="onFocus($event)"
      (blur)="onBlur($event)"
      debounce="500">
    </ckeditor>
    `,
})

export class Editor {
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
