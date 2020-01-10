import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export abstract class BaseService {

  protected options;
  protected apiControllerUrl;

  constructor(protected http: HttpClient, rota: string) {
    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json'
      })
    };
    this.apiControllerUrl = environment.urlAPI + rota;
  }
}
