import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Cadastro } from '../../models/cadastroModel';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl = `${environment.apiUrl}/cadastro`
  constructor(private http : HttpClient) { }

  criarUsuario(cadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.apiUrl, cadastro).pipe(
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
