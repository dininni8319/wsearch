import { 
  Component,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  term = ''
  @Output() termEventEmitter = new EventEmitter<string>()
  
  constructor() {}
  
  onFormSubmit(event: any) {
    event.preventDefault()
    this.termEventEmitter.emit(this.term)
  }

  // longer solution
  // onInput(str: string) {
  //   this.term = str
  // }
}
