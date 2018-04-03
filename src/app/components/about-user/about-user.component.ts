import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.scss']
})
export class AboutUserComponent implements OnInit {

  @Input() name: string;
  @Input() title: string;
  @Input() description: string;
  @Input() projects: string[];
  @Input() linkedIn: string;
  @Input() gitHub: string;
  @Input() facebook: string;
  @Input() twitter: string;
  @Input() pic: string;

  constructor() { }

  ngOnInit() {
  }


}
