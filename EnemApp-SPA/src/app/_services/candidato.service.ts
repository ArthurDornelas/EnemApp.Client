import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService extends BaseService {

  constructor(http: HttpClient) {
    super(http, 'candidatos/');
   }

  listarCandidatos() {
    return this.http.get(this.apiControllerUrl, this.options);
  }

  getCandidato(id: any) {
    return this.http.get(this.apiControllerUrl + id, this.options);
  }

  cadastrarCandidato(candidato: any) {
    return this.http.post(this.apiControllerUrl, candidato, this.options);
  }

  atualizarCandidato(candidato: any) {
    return this.http.put(this.apiControllerUrl, candidato, this.options);
  }

  deletarCandidato(id: any) {
    return this.http.delete(this.apiControllerUrl + id, this.options);
  }

  realizarConcurso(numVagas: any) {
    return this.http.put(this.apiControllerUrl + 'realizarConcurso/' + numVagas, this.options);
  }
}
