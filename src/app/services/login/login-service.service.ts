import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Login } from '../../models/loginModel';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs';
import { Cadastro } from '../../models/cadastroModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //HttpClient é definido no app.config e aqui o usamos
  //a porta está definida no asp.net, aqui referenciamos a mesma porta para utilizar o controller

  private apiUrl = `${environment.apiUrl}/Login`
  constructor(private http : HttpClient) { }


  //primeiro get que funcionar com ngOnInit no component, adicionar lá, ao abrir app ele já é chamado retornando com todos os logins.
  getLogin() : Observable<Login[]>
  {
    return this.http.get<Login[]>(this.apiUrl);
  }

  getLoginById(Login: Cadastro): Observable<Cadastro> {

    return this.http.post<Cadastro>(this.apiUrl, Login).pipe(
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
    return throwError('Algo está errado, tente novamente mais tarde.');
  }
}
