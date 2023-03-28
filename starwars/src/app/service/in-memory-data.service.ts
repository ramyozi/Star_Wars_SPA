import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pilote } from '../doc/pilote';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pilotes = [
      { id: 12, nom: 'Dr. Nice', prenom: 'toto', age: 12, race: "Chiss" },
      { id: 13, nom: 'Bombasto' , prenom: 'jaque', age: 43, race: "Kiffars" },
      { id: 14, nom: 'Celeritas', prenom: 'henri', age: 17, race: "Rakata"  },
      { id: 15, nom: 'Magneta', prenom: 'clara', age: 33, race: "Rodiens"  },
      { id: 16, nom: 'RubberMan', prenom: 'Damien', age: 15, race: "Ithoriens"  },
      { id: 17, nom: 'Dynama', prenom: 'Ludivine', age: 24, race: "Nagais"  },
      { id: 18, nom: 'Dr. IQ', prenom: 'Adrien', age: 32, race: "Humains"  },
      { id: 19, nom: 'Magma', prenom: 'Morgane', age: 674, race: "Ongrees"  },
      { id: 20, nom: 'Tornado', prenom: 'Yoann', age: 140, race: "Zabraks"  }
    ];
    return {pilotes};
  }


  genId(pilotes: Pilote[]): number {
    return pilotes.length > 0 ? Math.max(...pilotes.map(pilote => pilote.id)) + 1 : 11;
  }
}