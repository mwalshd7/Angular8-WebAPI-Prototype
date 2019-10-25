import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
API_KEY = 'cd0c79d099184c99bf9c833fcd6e80a3';
constructor(private httpClient: HttpClient) { }

  public getNews() {
    const key = this.API_KEY;
    const url = 'https://newsapi.org/v2/top-headlines?country=ie&apiKey=' + key;
    return this.httpClient.get(url);
  }

}

