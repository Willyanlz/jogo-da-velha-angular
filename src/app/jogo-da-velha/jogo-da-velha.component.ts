import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit{
  
  constructor(public jogoDaVelhaService: JogoDaVelhaService){}

  ngOnInit(): void {
      this.jogoDaVelhaService.inicializar();
  }

  /**
   * retorna se a tela de inicio deve ser exibida
   * @returns boolean
   */

  get showInicio(): boolean{
    return this.jogoDaVelhaService.showInicio;
  }
  /**
   * retorna se o tabuleiro deve ser exibido
   * @returns boolean
   */

  get showTabuleiro(): boolean{
    return this.jogoDaVelhaService.showTabuleiro;
  }
  /**
   * retorna se a tela final deve ser exibida
   * @returns boolean
   */

  get showFinal(): boolean{
    return this.jogoDaVelhaService.showFinal;
  }
  /**
   * inicia um novo jogo
   * @returns void
   */

  iniciarJogo(): void {
    this.jogoDaVelhaService.iniciarJogo();
  }

  /**
   * realiza jogada ao setar alguma posição no tabuleiro
   * 
   * @param posX number
   * @param posY number
   * @returns void
   */

  jogar(posX: number, posY: number): any {
    this.jogoDaVelhaService.jogar(posX, posY);
  }

  /**
   * exibe X no local clicado
   * @param posX number
   * @param posY number
   * @returns boolean
   */

  exibirX(posX: number, posY: number): boolean{
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }

    /**
   * exibe O no local clicado
   * @param posX number
   * @param posY number
   * @returns boolean
   */
 
  exibirO(posX: number, posY: number): boolean{
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

    /**
   * exibe marcação de vitoria
   * @param posX number
   * @param posY number
   * @returns boolean
   */
 
  exibirVitoria(posX: number, posY: number): boolean{
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

  /**
   * retorna numero de jogador deve jogar
   * 
   * @returns number
   */

  get jogador(): number {
    return this.jogoDaVelhaService.jogador;
  }

  novoJogo(): void{
    return this.jogoDaVelhaService.novoJogo();
  }
}
