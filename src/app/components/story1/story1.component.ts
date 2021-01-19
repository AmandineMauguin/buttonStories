import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story1',
  templateUrl: './story1.component.html',
  styleUrls: ['./story1.component.scss'],
})
export class Story1Component implements OnInit {

  @Input() img :any;
  constructor() { }

  ngOnInit() {}

}
