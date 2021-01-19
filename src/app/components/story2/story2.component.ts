import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-story2',
  templateUrl: './story2.component.html',
  styleUrls: ['./story2.component.scss'],
})
export class Story2Component implements OnInit {
  @Input() img :any;
  constructor() { }

  ngOnInit() {}

}
