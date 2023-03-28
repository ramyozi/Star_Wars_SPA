import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';
import { Chasseur } from '../doc/chasseurs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryData2Service implements InMemoryDbService {
  createDb() {
    const chasseurs = [
      {id: 1, type: 'X-Wing', etat: 'Opérationnel'},
      {id: 2, type: 'Y-wing', etat: 'En maintenance'},
      {id: 3, type: 'X-wing', etat: 'Détruit'}
    ];
    return {chasseurs};
  }
  
  genId(chasseurs: Chasseur[]): number {
    return chasseurs.length > 0 ? Math.max(...chasseurs.map(chasseur => chasseur.id)) + 1 : 11;
  }

}
