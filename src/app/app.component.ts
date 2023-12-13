import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages = []
  // this function is called when we create an instance of a class
  // this is a lifecycle method
  constructor(private wikipidiaService: WikipediaService) {}
 
  onTerm(term: string) {
    this.wikipidiaService.search(term).subscribe((response: any) =>
      this.pages = response.query.search
    );
    // https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space
  }
}
