import { Component } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private http: HttpClient) {}

  joke:'';
   getJoke(){
     this.http.get('https://api.chucknorris.io/jokes/random').subscribe((data: any) => {
        this.joke = data.value;
   })

  }

}
