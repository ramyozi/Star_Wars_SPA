import { Component } from '@angular/core';
import { Chasseur } from 'src/app/doc/chasseurs';
import { ChasseursService } from 'src/app/service/chasseurs.service';

@Component({
  selector: 'app-chasseurs-recherche',
  templateUrl: './chasseurs-recherche.component.html',
  styleUrls: ['./chasseurs-recherche.component.css']
})
export class ChasseursRechercheComponent /*implement OnInit*/ {
  chasseurs: Chasseur[] = [];

  constructor(private chasseursService: ChasseursService) { }

  ngOnInit(): void {
    this.getChasseurs();
  }

  getChasseurs(): void{
    this.chasseursService.getChasseurs()
      .subscribe(chasseurs => this.chasseurs = chasseurs);      
  }
}
