import { Injectable } from '@angular/core';
import { SuperService } from '../shared/super.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends SuperService {
  // constructor() {
  //   super();
  // }

  login(o) {
    return this.http.post(`${this.url}/users`, o);
  }

  update(id, o) {
    return this.http.put(`${this.url}/users/${id}`, o);
  }
}
