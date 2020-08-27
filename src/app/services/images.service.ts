import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class ImagesService {

  constructor(private http: HttpClient) { }

  getSearchedImages(data: string) {
    return this.http.get("https://api.unsplash.com/search/photos?query=" + data + "&client_id=Ggaq0mckQsx6L6D2eVQGTtkQYF12Wn-Qkb6RyH0jyK8");
  }
}

