import { Component, OnInit } from "@angular/core";
import { StorageService } from "../services/storage.service";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page implements OnInit {
  constructor(
    private storage: StorageService
  ) {}

  storyList = [];
  
  ionViewWillEnter(){
    console.log('blblblblbl');
    this.storage.initialized();
    this.storage.getData().then((retour) => {
      this.storyList = retour;
      console.log(this.storyList)
    });

   
    
  }
  ngOnInit(){
    // console.log('blblblblbl');
    // this.storage.initialized();
    // this.storage.getData().then((retour) => {
    //   this.storyList = retour;
    //   console.log(this.storyList)
    // });
  }
  
}
