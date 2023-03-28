import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Chasseur } from 'src/app/doc/chasseurs';
import { ChasseursService } from 'src/app/service/chasseurs.service';

@Component({
  selector: 'app-chasseur-detail',
  templateUrl: './chasseur-detail.component.html',
  styleUrls: ['./chasseur-detail.component.css']
})
export class ChasseurDetailComponent {

  chasseur: Chasseur | undefined;

  constructor(
    private route: ActivatedRoute,
    private chasseursService: ChasseursService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getChasseur();
  }

  getChasseur(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.chasseursService.getChasseur(id)
      .subscribe(chasseur=> this.chasseur = chasseur);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
      if (this.chasseur) {
        this.chasseursService.updateChasseur(this.chasseur)
          .subscribe(() => this.goBack());
      }
  }
}
