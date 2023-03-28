import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pilote } from '../doc/pilote';

@Injectable({
  providedIn: 'root'
})
export class PiloteService {

  
  private pilotesUrl = 'api/pilotes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient  
  ) { }

  /** GET heroes from the server */
  getPilotes(): Observable<Pilote[]> {
    return this.http.get<Pilote[]>(this.pilotesUrl)
    /**  .pipe(
        tap(_ => this.log('fetched pilotes')),
        catchError(this.handleError<Pilote[]>('getPilotes', []))
      )*/;
  }

  /** GET pilote by id. Will 404 if id not found */
  getPilote(id: number): Observable<Pilote> {
    const url = `${this.pilotesUrl}/${id}`;
    return this.http.get<Pilote>(url)/**
      .pipe(
      tap(_ => this.log(`fetched pilote id=${id}`)),
      catchError(this.handleError<Pilote>(`getPilote id=${id}`))
    )*/;
  }

  /** PUT: update the pilote on the server */
  updatePilote(pilote: Pilote): Observable<any> {
    return this.http.put(this.pilotesUrl, pilote, this.httpOptions)
  /**  .pipe(
      tap(_ => this.log(`updated pilote id=${pilote.id}`)),
      catchError(this.handleError<any>('updatePilote'))
    )*/;
  }

  addPilote(pilote: Pilote): Observable<Pilote> {
    return this.http.post<Pilote>(this.pilotesUrl, pilote, this.httpOptions);
  }

  searchPilotes(term: string): Observable<Pilote[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Pilote[]>(`${this.pilotesUrl}/?id=${term}`)
    /*.pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    )*/;
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  } 

}
