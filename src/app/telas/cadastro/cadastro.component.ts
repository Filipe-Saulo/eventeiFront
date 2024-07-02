import { Component } from '@angular/core';
import { Cadastro } from '../../models/cadastroModel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CadastroService } from '../../services/cadastro/cadastro.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterModule, LoginComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  dadosNovoUsuario: Cadastro = {
    id_Usuario: '',
    nm_usuario: '',
    dt_nascimento: '',
    tp_usuario: false,
    usuario_ID: '',
    pw_usuario: '',
    cfp_usuario: '',
    email_usuario: '',
    id_cidade: '',
    cpMsgErro: ''
  }

  mensagemErro: string = "";

  constructor(private cadastroService : CadastroService, private router: Router){}

  onSubmit() {
    this.cadastroService.criarUsuario(this.dadosNovoUsuario).subscribe(
      response => {
        if(response.cpMsgErro == ""){
          alert('Cadastro realizado com sucesso!');
          this.router.navigate(['/']);
        }
        else{
          alert(response.cpMsgErro);
        }
      },
      error => {
        // Handle error response
        console.error('There was an error!', error);
      }
    );
  }
}
