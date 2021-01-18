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
      title: "X",
      author: "Me",
      description: "It's an X.",
    },
    {
      id: 1,
      url: "../../assets/space2.jpg",
      title: "X",
      author: "Me",
      description: "It's an X.",
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

  setData(o) {
    this.storage.set("data", o);
  }
}
