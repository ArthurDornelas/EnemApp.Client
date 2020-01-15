import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
})

export class ConcursoService extends BaseService {

    constructor(http: HttpClient) {
        super(http, 'concursos/');
    }

    listarConcursos() {
        return this.http.get(this.apiControllerUrl, this.options);
    }

    getConcurso(id: any) {
        return this.http.get(this.apiControllerUrl + id, this.options);
    }

    cadastrarConcurso(concurso: any) {
        return this.http.post(this.apiControllerUrl, concurso, this.options);
    }

    atualizarConcurso(concurso: any) {
        return this.http.put(this.apiControllerUrl, concurso, this.options);
    }

    deletarConcurso(id: any) {
        return this.http.delete(this.apiControllerUrl + id, this.options);
    }

}