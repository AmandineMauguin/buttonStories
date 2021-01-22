import { Component, OnInit } from "@angular/core";
import { StorageService } from "../../services/storage.service";

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-story",
  templateUrl: "./story.page.html",
  styleUrls: ["./story.page.scss"],
})
export class StoryPage implements OnInit {
  constructor(
    private storage: StorageService,
    private activatedRoute: ActivatedRoute,
  ) {}

  storyDetails = { id: 0, url:'', title:'', author:'', favorite: false };
  storyIndex = 0;
  ngOnInit() {
    this.storage.initialized();
    this.activatedRoute.params.subscribe((params) => {
      this.storage.getData().then((retour) => {
        this.storyIndex = retour.findIndex((item) => item.id == params.id);
        this.storyDetails = retour[this.storyIndex];
      });
    });
  }

  async getFavorite() {
    let params = {
      id: this.storyIndex,
      favorite: false,
    };
    await this.storage.changeBoolean(params);
    this.storyDetails.favorite = params.favorite;
  }
}
