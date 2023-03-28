import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';
import { InMemoryData2Service } from './service/in-memory-data2.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PilotesComponent } from './component/pilotes/pilotes.component';
import { ChasseursComponent } from './component/chasseurs/chasseurs.component';
import { PilotesRechercheComponent } from './component/pilotes-recherche/pilotes-recherche.component';
import { PilotesInscriptionComponent } from './component/pilotes-inscription/pilotes-inscription.component';
import { ChasseursInscriptionComponent } from './component/chasseurs-inscription/chasseurs-inscription.component';
import { ChasseursRechercheComponent } from './component/chasseurs-recherche/chasseurs-recherche.component';
import { PiloteDetailComponent } from './component/pilote-detail/pilote-detail.component';
import { ChasseurDetailComponent } from './component/chasseur-detail/chasseur-detail.component';
import { PiloteSearchComponent } from './component/pilote-search/pilote-search.component';
import { PilotesListeComponent } from './component/pilotes-liste/pilotes-liste.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    PilotesComponent,
    ChasseursComponent,
    PilotesRechercheComponent,
    PilotesInscriptionComponent,
    ChasseursInscriptionComponent,
    ChasseursRechercheComponent,
    PiloteDetailComponent,
    ChasseurDetailComponent,
    PiloteSearchComponent,
    PilotesListeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
 /*   HttpClientInMemoryWebApiModule.forRoot(
      InMemoryData2Service, { dataEncapsulation: false }
    ), */
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
