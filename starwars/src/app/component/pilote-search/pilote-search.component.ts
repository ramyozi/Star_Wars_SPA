import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import { Pilote } from '../../doc/pilote';
import { PiloteService } from '../../service/pilote.service';

@Component({
  selector: 'app-pilote-search',
  templateUrl: './pilote-search.component.html',
  styleUrls: ['./pilote-search.component.css']
})
export class PiloteSearchComponent implements OnInit {

  pilotes$!: Observable<Pilote[]>;
  
  private searchTerms = new Subject<string>();

  constructor(private piloteService: PiloteService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pilotes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.piloteService.searchPilotes(term)),
    );
  }

}
