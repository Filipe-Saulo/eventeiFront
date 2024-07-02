import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/loginModel';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login/login-service.service';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterModule, RouterOutlet } from '@angular/router';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { Cadastro } from '../../models/cadastroModel';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterModule, CadastroComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

//implements OnInit é para iniciar a tela com o metodo ngOnINit() abaixo
export class LoginComponent implements OnInit {

  logins: Login[] = [];
  
  mensagemErro: string = "";

  dadosCarregados: boolean = false;

  Login: Cadastro = {
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


  constructor(private loginService : LoginService, private router: Router){}

  //inicia a tela com esse comando do angular desencadeando todo o processo
  ngOnInit(){
   // this.getLogin();
  }


  getLogin(): void {
    this.loginService.getLogin()
      .subscribe({
        next: (login) => {
          this.logins = login;
          this.dadosCarregados = true;  // Atualiza quando os dados são carregados
        },
        error: (err) => {
          this.mensagemErro = err;
        }
      });
  }


  login() {
    this.Login.usuario_ID = (document.getElementsByName('usuario_ID')[0] as HTMLInputElement).value;
    this.Login.pw_usuario = (document.getElementsByName('pw_usuario')[0] as HTMLInputElement).value;
    // Aqui você pode chamar o serviço de login e redirecionar para a página home se o login for bem-sucedido
    this.loginService.getLoginById(this.Login).subscribe({
      next: (login) => {
        if (login.cpMsgErro == "") {
          this.router.navigate(['/orgHome']);
        } else {
          console.log(login)
          alert(login.cpMsgErro);
        }
      },
      error: (err) => {
        // Tratar erro, se necessário
      }
    });
  }
}
