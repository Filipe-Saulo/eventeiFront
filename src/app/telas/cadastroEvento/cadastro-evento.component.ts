import { Component } from '@angular/core';
import { Evento } from '../../models/eventoModel';
import { CadastroEventoService } from '../../services/cadastroEvento/cadastroEvento.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-evento',
  standalone: true,
  imports: [CommonModule , FormsModule, RouterOutlet, RouterModule],
  templateUrl: './cadastro-evento.component.html',
  styleUrl: './cadastro-evento.component.css'
})
export class CadastroEventoComponent {
  dadosNovosEventos: Evento = {
    id_evento: '',
    nm_Evento: '',
    desc_evento: '',
    dt_InicioEvento: '',
    dt_FimEvento: '',
    dt_Cadastro: '',
    id_RespEvento: '',
    id_Cidade: '',
    desc_endereco: '',
    vlr_ingresso: 0,
    status_evento: '',
    idade_minima: 0
  }

  mensagemErro: string = "";

  constructor(private cadastroEventoService : CadastroEventoService, private router: Router){}

  
  onSubmit() {
    this.cadastroEventoService.criarEvento(this.dadosNovosEventos).subscribe(
      response => {
        if(response){
          console.log("CADASTROU O EVENTO EU ACHO")
        }
        else{

        }
      },
      error => {
        // Handle error response
        console.error('There was an error!', error);
      }
    );
  }


}
