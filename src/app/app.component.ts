import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { Observable } from 'rxjs';

const observable = new Observable<number>((observar) => {
  observar.next(1);
})

observable.subscribe((value) => {
  console.log(value);
})

interface Pages {
  title: string;
  snippet: string;
  pageid: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  pages: Pages[] | [] = []
  // this function is called when we create an instance of a class
  // this is a lifecycle method
  constructor(private wikipidiaService: WikipediaService) {}
 
  onTerm(term: string) {
    this.wikipidiaService.search(term).subscribe((pages) =>
      this.pages = pages
    );
    // https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space
  }
}
