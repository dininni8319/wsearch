import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WikipediaService {
  constructor(
    // instance of http client when is instanciated, this is a dependence
    private http: HttpClient
  ) {}

  search(term: string) {
    
    return this.http.get(
      'https://en.wikipedia.org/w/api.php',
      {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1', //We are not using number because is going to end up as a string
          srsearch: term,
          origin: '*'  // 
        }
      }
    )
  }
}
