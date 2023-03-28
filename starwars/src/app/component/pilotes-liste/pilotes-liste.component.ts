import { Component , OnInit } from '@angular/core';
import { Pilote } from 'src/app/doc/pilote';

import { PiloteService } from '../../service/pilote.service';

@Component({
  selector: 'app-pilotes-liste',
  templateUrl: './pilotes-liste.component.html',
  styleUrls: ['./pilotes-liste.component.css']
})

export class PilotesListeComponent implements OnInit {
  pilotes: Pilote[] = [];

  constructor(private piloteService: PiloteService) { }

  ngOnInit(): void {
    this.getPilotes();
  }

  getPilotes(): void {
    this.piloteService.getPilotes()
    .subscribe(pilotes => this.pilotes = pilotes);
  } 
}


