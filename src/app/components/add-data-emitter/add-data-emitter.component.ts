import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddDataEmitterComponent<T> {
  dadosSelecionados = new EventEmitter<T>();

  emitirDados(dados: T): void {
    this.dadosSelecionados.emit(dados);
  }
}
