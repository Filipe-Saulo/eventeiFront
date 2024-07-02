import { Routes } from '@angular/router';
import { LoginComponent } from './telas/login/login.component';
import { CadastroComponent } from './telas/cadastro/cadastro.component';
import { ClienteHomeComponent } from './telas/home/cliente_home/cliente-home.component';
import { OrgHomeComponent } from './telas/home/org_home/org-home.component';
import { BuscarEventoComponent } from './telas/buscarEvento/buscar-evento.component';
import { CadastroEventoComponent } from './telas/cadastroEvento/cadastro-evento.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'Login', redirectTo: '', pathMatch:'full'},
    {path: 'clienteHome', component: ClienteHomeComponent},
    {path: 'orgHome', component: OrgHomeComponent},
    {path: 'buscarEvento', component: BuscarEventoComponent},
    {path: 'cadastroEvento', component: CadastroEventoComponent},
];
