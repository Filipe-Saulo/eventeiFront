import { Component } from '@angular/core';
import { Home } from '../../../models/homeModel';
import { Route, Router, RouterModule, RouterOutlet } from '@angular/router';
import { ClienteHomeService } from '../../../services/home/cliente_home/cliente-home.service';

@Component({
  selector: 'app-cliente-home',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './cliente-home.component.html',
  styleUrl: './cliente-home.component.css'
})
export class ClienteHomeComponent {
  //adicionar if se tipo-cliente for diferente de 0 
  // (0 = cliente), se for diferente redirecionar para org_home

}
