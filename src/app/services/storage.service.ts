import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
@Injectable({
  providedIn: "root",
})
export class StorageService {
  private data = [
    {
      id: 0,
      url: "../../assets/space1.jpg",
      title: "Virus",
      author: "Me",
      favorite:false,
    },
    {
      id: 1,
      url: "../../assets/space2.jpg",
      title: "It's a sad story",
      author: "My cat",
      favorite:false,
    },
    {
      id: 2,
      url: "../../assets/space3.jpg",
      title: "Liar",
      author: "My Dog",
      favorite:false,
    },
    {
      id: 3,
      url: "../../assets/space4.jpg",
      title: "Carrot",
      author: "My rabbit",
      favorite:false,
    },
    {
      id: 4,
      url: "../../assets/space5.jpg",
      title: "Face to face",
      author: "My brother",
      favorite:false,
    },
    {
      id: 5,
      url: "../../assets/space6.jpg",
      title: "Blink",
      author: "My teacher",
      favorite:false,
    },
  ];
  constructor(private storage: Storage) {}

  async initialized() {
    if ((await this.storage.get("data")) == null) {
      this.storage.set("data", this.data);
    }
  }

  async getData() {
    const retour = await this.storage.get("data");
    return retour;
  }

  setData(obj) {
    this.storage.set("data", obj);
  }

  //Fonction qui passe le boolean favorite de false à true (et vis-versa)
  async changeBoolean(params){
    const stories = await this.storage.get('data');
    stories[params.id].favorite =  !stories[params.id].favorite;
    params.favorite = stories[params.id].favorite; 
    this.storage.set('data', stories);
  }

  isFavorite(params){
    params.favorite = this.data[params.id].favorite;
  }
}
