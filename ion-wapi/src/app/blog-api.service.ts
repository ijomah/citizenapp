import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BlogApiService {
private baseUrl = 'http://jacobwordpressapi.atwebpages.com/';

private Authorization: string
 //Wordpress api endpoint for postMessages
 public url = `${this.baseUrl}/wp-json/wp/v2/post`;

 // Store for credentials
 adminAccess: any = {
  username: 'ijomahifinwa@gmail.com',
  password: 'digits1985'
}
 httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}
 // Token url
 private tokenUrl = `${this.baseUrl}/wp-json/jwt-auth/v1/token`;

  constructor(public http: HttpClient) { }

  bringBlogWritings() {
      this.http.get('https://swapi.dev/api/films/')
      .pipe(catchError(this.handleError('bringBlogWriting')))
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }

  }


  bringToken(): Observable<any> {
    return this.http.post(this.tokenUrl, this.adminAccess)
    .pipe(catchError(this.handleError('bringToken')))
  }
}