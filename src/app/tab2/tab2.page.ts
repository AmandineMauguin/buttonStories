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
    this.storage.initialized();
    this.storage.getData().then((retour) => {
      this.storyList = retour;
    });
    
  }
}
