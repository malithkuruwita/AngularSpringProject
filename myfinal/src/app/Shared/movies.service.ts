import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Movies } from './Movie';



const endpoint = 'http://localhost:49673/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response){
    let body = res;
    return body || { };
  }

  selectedMovies:Movies;
  products:Movies[];
  newproduct:Movies[];


  getProducts(): Observable<any> {
    return this.http.get(endpoint + 'values', httpOptions).pipe(
      map(this.extractData));
  }

  getProduct(id): Observable<any> {
    return this.http.get(endpoint + 'values/' + id, httpOptions).pipe(
      map(this.extractData));
  }


  addProduct (product:Movies): Observable<Movies> {
    console.log(product);
    var body = JSON.stringify(product);
    return this.http.post<Movies>(endpoint + 'values', body, httpOptions).pipe(
      tap((product) => console.log(`added movie w/ id=${product.id}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }

  updateProduct (id, product:Movies): Observable<Movies> {
    console.log(product);
    console.log(id);
    return this.http.put(endpoint + 'values/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct (id): Observable<Movies> {
    return this.http.delete<Movies>(endpoint + 'values/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
      
    );
  }





  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
