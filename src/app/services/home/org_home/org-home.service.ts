import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Home } from '../../../models/homeModel';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrgHomeService {

  private apiUrl = `${environment.apiUrl}/orgHome`
  constructor(private http : HttpClient) { }

}
