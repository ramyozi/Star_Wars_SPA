import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pilote } from '../../doc/pilote';
import { PiloteService } from '../../service/pilote.service';

@Component({
  selector: 'app-pilote-detail',
  templateUrl: './pilote-detail.component.html',
  styleUrls: ['./pilote-detail.component.css']
})
export class PiloteDetailComponent {


  pilote: Pilote | undefined;

  constructor(
    private route: ActivatedRoute,
    private piloteService: PiloteService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPilote();
  }

  getPilote(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.piloteService.getPilote(id)
      .subscribe(pilote => this.pilote = pilote);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.pilote) {
      this.piloteService.updatePilote(this.pilote)
        .subscribe(() => this.goBack());
    }
  }
}