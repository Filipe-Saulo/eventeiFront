import { Component } from '@angular/core';
import { Home } from '../../../models/homeModel';
import { Route, Router, RouterModule, RouterOutlet } from '@angular/router';
import { OrgHomeService } from '../../../services/home/org_home/org-home.service';
import { BuscarEventoComponent } from '../../buscarEvento/buscar-evento.component';
import { CadastroEventoComponent } from '../../cadastroEvento/cadastro-evento.component';

@Component({
  selector: 'app-org-home',
  standalone: true,
  imports: [RouterOutlet, RouterModule, BuscarEventoComponent, CadastroEventoComponent],
  templateUrl: './org-home.component.html',
  styleUrl: './org-home.component.css'
})
export class OrgHomeComponent {
  

}
