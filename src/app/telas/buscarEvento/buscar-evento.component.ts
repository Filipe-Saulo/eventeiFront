import { Component } from '@angular/core';
import { Route, Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Evento } from '../../models/eventoModel';
import { BuscarEventoService } from '../../services/buscarEvento/buscarEvento.service';

@Component({
  selector: 'app-buscar-evento',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterModule],
  templateUrl: './buscar-evento.component.html',
  styleUrl: './buscar-evento.component.css'
})
export class BuscarEventoComponent {

  evento: Evento = {
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

  eventos: Evento[] = [];  // Array para armazenar os eventos retornados

  constructor(private buscarEventoService : BuscarEventoService, private router: Router){}


  buscarEvento() {
    this.evento.nm_Evento = (document.getElementsByName('nm_Evento')[0] as HTMLInputElement).value;

    this.buscarEventoService.getEventoByName(this.evento.nm_Evento).subscribe({
      next: (eventos: Evento[]) => {  // Espera um array de eventos
        this.eventos = eventos;  // Armazena os eventos retornados
        console.log("Eventos retornados:", this.eventos);
      },
      error: (err) => {
        console.error("Erro ao buscar evento:", err);
      }
    });
  }


  
  //metodo funcional abaixo

  // buscarEvento() {
  //   this.evento.nm_Evento = (document.getElementsByName('nm_Evento')[0] as HTMLInputElement).value;

  //   // Aqui você pode chamar o serviço de valor e adicionar funcionalidades.
  //   this.buscarEventoService.getEventoByName(this.evento).subscribe({
  //     next: (evento) => {
  //       if (evento) {
  //         console.log("retornou valor")
  //         console.log(evento)
  //       } else {
  //         console.log("retornou erro")
  //         console.log(evento)
  //       }
  //     },
  //     error: (err) => {
  //       // Tratar erro, se necessário
  //     }
  //   });
  // }

}
