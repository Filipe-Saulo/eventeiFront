import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Evento } from '../../models/eventoModel';

@Injectable({
  providedIn: 'root'
})
export class BuscarEventoService {

  private apiUrl = `${environment.apiUrl}/buscarEvento`
  constructor(private http : HttpClient) { }

  getEventoByName(nm_Evento: string): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.apiUrl}?nome=${nm_Evento}`).pipe(
      tap(response => {
        // Log or process the response here if needed
        console.log('Eventos encontrados com sucesso', response);
      }),
      catchError(this.handleError<Evento[]>('getEventoByName', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }






  //ABAIXO ESTA FUNCIONANDO DESCOMENTAR AQUI E LA NO COMPONENT SE DER MERDA

  // getEventoByName(evento: Evento): Observable<Evento> {
  //   console.log(evento);
  //   return this.http.post<Evento>(this.apiUrl, evento).pipe(
  //     tap(response => {
  //       // Log or process the response here if needed
  //       console.log('User created successfully', response);
  //     }),
  //     catchError(this.handleError)
  //   );
  // }

  // private handleError(error: HttpErrorResponse) {
  //   // Handle the error based on the status code
  //   if (error.error instanceof ErrorEvent) {
  //     // Client-side error
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // Backend error
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   return throwError('Something went wrong; please try again later.');
  // }
}
