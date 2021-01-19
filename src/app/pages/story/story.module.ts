import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { StoryPageRoutingModule } from "./story-routing.module";

import { StoryPage } from "./story.page";

import { Story1Component } from "../../components/story1/story1.component";
import { Story2Component } from "../../components/story2/story2.component";
import { Story3Component } from "../../components/story3/story3.component";
import { Story4Component } from "../../components/story4/story4.component";
import { Story5Component } from "../../components/story5/story5.component";
import { Story6Component } from "../../components/story6/story6.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, StoryPageRoutingModule],
  declarations: [
    StoryPage, 
    Story1Component,
    Story2Component,
    Story3Component,
    Story4Component,
    Story5Component,
    Story6Component,
  ],
})
export class StoryPageModule {}
