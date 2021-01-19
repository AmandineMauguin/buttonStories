import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StorageService } from "../services/storage.service";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  constructor(
    private activatedRoute: ActivatedRoute,
    private storage: StorageService
  ) {}

  storyList = [];
  
  ionViewWillEnter(){
    this.storage.initialized();
    this.storage.getData().then((retour) => {
      this.storyList = retour;
    });
    
  }
  

  
}
