import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Chasseur } from '../doc/chasseurs';

@Injectable({
  providedIn: 'root'
})
export class ChasseursService{

  
  private chasseursUrl = 'api/chasseurs';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient  
  ) { }

  /** GET heroes from the server */
  getChasseurs(): Observable<Chasseur[]> {
    return this.http.get<Chasseur[]>(this.chasseursUrl)
    /**  .pipe(
        tap(_ => this.log('fetched pilotes')),
        catchError(this.handleError<Pilote[]>('getPilotes', []))
      )*/;
  }

  /** GET pilote by id. Will 404 if id not found */
  getChasseur(id: number): Observable<Chasseur> {
    const url = `${this.chasseursUrl}/${id}`;
    return this.http.get<Chasseur>(url)/**
      .pipe(
      tap(_ => this.log(`fetched pilote id=${id}`)),
      catchError(this.handleError<Pilote>(`getPilote id=${id}`))
    )*/;
  }

  /** PUT: update the pilote on the server */
  updateChasseur(chasseur: Chasseur): Observable<any> {
    return this.http.put(this.chasseursUrl, chasseur, this.httpOptions)
  /**  .pipe(
      tap(_ => this.log(`updated pilote id=${pilote.id}`)),
      catchError(this.handleError<any>('updatePilote'))
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
