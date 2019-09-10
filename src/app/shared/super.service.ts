import { Injectable, Inject, Optional, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from 'express';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { InjectService } from '../inject.service';
import { isPlatformBrowser } from '@angular/common';

const URL = 'http://localhost:4100/api';
@Injectable({
  providedIn: 'root'
})
export class SuperService {
  // protected http = InjectService.injector.get(HttpClient);
  // @Optional() request: Request = InjectService.injector.get(REQUEST);
  // protected platform: any = InjectService.injector.get(PLATFORM_ID);
  // protected url = URL;
  // protected url = URL; // InjectService.injector.get('BASE_URL');
  url = this.request ? `${this.request.protocol}://${this.request.get('host')}/api` : 'requst = 0';
  // url = this.baseUrl ? `${this.baseUrl}/api` : URL;

  constructor(@Optional() @Inject(REQUEST) protected request: Request = null
    , @Inject(PLATFORM_ID) platform = null, protected http: HttpClient = null) {
    if (isPlatformBrowser(platform)) {
      console.log('browser >>>>>>>>>>>>>>>>>>>');
      console.log(this.url);
      const origin = window.location.origin;
      this.url = origin !== 'http://localhost:4200' ? `${origin}/api` : URL;
      console.log(this.url);
    } else {
      console.log('server >>>>>>>>>>>>>>>>>>>');
      console.log(this.url);
    }
  }



  insertOrUpdate(o) {
    return this.http.post(`${this.url}/sections/save`, o);
  }

  get(id) {
    return this.http.get(`${this.url}/sections/${id}`);
  }

  postEmail(o) {
    return this.http.post(`${this.url}/email`, o);
  }

  getAllChiffre() {
    return this.http.get(`${this.url}/chiffres`);
  }

  postChiffre(o) {
    return this.http.post(`${this.url}/chiffres`, o);
  }

  putChiffre(id, o) {
    return this.http.put(`${this.url}/chiffres/${id}`, o);
  }

  deleteChiffre(id) {
    return this.http.delete(`${this.url}/chiffres/${id}`);
  }

  getAllClient() {
    return this.http.get(`${this.url}/clients`);
  }

  postClient(o) {
    return this.http.post(`${this.url}/clients`, o);
  }

  putClient(id, o) {
    return this.http.put(`${this.url}/clients/${id}`, o);
  }

  deleteClient(id) {
    return this.http.delete(`${this.url}/clients/${id}`);
  }

  postContact(o) {
    return this.http.post(`${this.url}/contacts`, o);
  }
}
