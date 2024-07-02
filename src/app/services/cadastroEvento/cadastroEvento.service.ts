import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Evento } from '../../models/eventoModel';
import { environment } from '../../../environments/environment';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroEventoService {

  private apiUrl = `${environment.apiUrl}/cadastroEvento`
  constructor(private http : HttpClient) { }

  criarEvento(cadastroEvento: Evento): Observable<Evento> {
    console.log(cadastroEvento)
    return this.http.post<Evento>(this.apiUrl, cadastroEvento).pipe(
      tap(response => {
        // Log or process the response here if needed
        console.log('User created successfully', response);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Handle the error based on the status code
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('An error occurred:', error.error.message);
    } else {
      // Backend error
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something went wrong; please try again later.');
  }
}
