import { Component, OnInit } from '@angular/core';

import {StorageService} from '../services/storage.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private storage : StorageService) {}

  storyList = [];

  ngOnInit(){
    console.log('ui');
    this.storage.initialized();
    this.storage.getData().then((retour) => {
      this.storyList = retour;
      console.log("this.storyList dans tab2: " + this.storyList)
    });
    
  }
}
