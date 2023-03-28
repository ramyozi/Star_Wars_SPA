import { Component, OnInit } from '@angular/core';
import { Pilote } from 'src/app/doc/pilote';
import { PiloteService } from 'src/app/service/pilote.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pilotes-inscription',
  templateUrl: './pilotes-inscription.component.html',
  styleUrls: ['./pilotes-inscription.component.css']
})
export class PilotesInscriptionComponent  implements OnInit{
  pilotes: Pilote[] = [];
  
  constructor(private piloteService: PiloteService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPilotes();
  }

  getPilotes(): void {
    this.piloteService.getPilotes()
    .subscribe(pilotes => this.pilotes = pilotes);
  }

  add(nom: string, prenom: string, age: number, race: string): void {
    nom = nom.trim();
    prenom = prenom.trim();
    if (!nom) { return; }
    if (!prenom) { return; }
    if (!age || age<10 || age>800) { return; }
    this.piloteService.addPilote({ nom , prenom , age ,race } as Pilote)
      .subscribe(pilote => {
        this.pilotes.push(pilote);this.goBack();
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

}
