import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Home } from '../../../models/homeModel';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ClienteHomeService {

  private apiUrl = `${environment.apiUrl}/clienteHome`
  constructor(private http : HttpClient) { }

  //criar metodo similar ao de getLogin que esta funcional, mas pegando imgs

}
