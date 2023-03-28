import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChasseursComponent } from './component/chasseurs/chasseurs.component';

import { PilotesComponent } from './component/pilotes/pilotes.component';
import { PilotesInscriptionComponent } from './component/pilotes-inscription/pilotes-inscription.component';
import { PilotesRechercheComponent } from './component/pilotes-recherche/pilotes-recherche.component';
import { ChasseursInscriptionComponent } from './component/chasseurs-inscription/chasseurs-inscription.component';
import { ChasseursRechercheComponent } from './component/chasseurs-recherche/chasseurs-recherche.component';
import { PiloteDetailComponent } from './component/pilote-detail/pilote-detail.component';
import { PilotesListeComponent } from './component/pilotes-liste/pilotes-liste.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/pilotes/liste', pathMatch: 'full' },
  { path: 'pilotes', redirectTo: 'pilotes/liste',  pathMatch: 'full' },  
  { path: 'pilotes/pilote-inscription', component: PilotesInscriptionComponent },
  { path: 'pilotes/liste', component: PilotesListeComponent },
  { path: 'pilotes/pilote-recherche', component: PilotesRechercheComponent },
  { path: 'chasseurs', component: ChasseursComponent },
  { path: 'chasseurs/chasseur-inscription', component: ChasseursInscriptionComponent },
  { path: 'chasseurs/chasseur-recherche', component: ChasseursRechercheComponent },
  { path: 'detail/:id', component: PiloteDetailComponent },
  { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
