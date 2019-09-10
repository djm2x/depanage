import { Injectable, PLATFORM_ID, Inject, EventEmitter } from '@angular/core';
import { User } from './models';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Subject, BehaviorSubject } from 'rxjs';

const USER = 'USER';
const TOKEN = 'TOKEN';
const ROLE = 'ROLE';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public user = new User();
  public token = '';
  public idRole = -1;
  public notif = new BehaviorSubject({});
  public notif2: EventEmitter<{ is: boolean, user: User, idRole?: number }> = new EventEmitter();
  constructor(@Inject(PLATFORM_ID) protected platformId: Object) {
    this.getSession();
  }
  // se connecter
  public doSignIn(user: User) {
    if (!user) {
      return;
    }
    this.user = user;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(USER, JSON.stringify(this.user));
    }
    this.notif.next({ is: true, user: this.user });
  }

  // se deconnecter
  public doSignOut(): void {
    this.user = new User();
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(USER);
    }
    this.notif.next({ is: false, user: this.user });
  }

  // this methode is for our auth guard
  get isSignedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem(USER);
    }

    if (isPlatformServer(this.platformId)) {
      return true;
    }
  }

  //
  public getSession(): void {
    console.log('getsession >>>>>>>>>>>>>>>>>>>>>>>>>>>');
    if (isPlatformBrowser(this.platformId)) {
      try {
        this.user = JSON.parse(localStorage.getItem(USER));
        if (!this.user) {
          this.user = new User();
          this.notif.next({ is: false, user: this.user });
        } else {
          this.notif.next({ is: true, user: this.user });
        }
        // this.notif2.next({ is: true, user: this.user });

      } catch (error) {
        this.user = new User();
        this.notif.next({ is: false, user: this.user });
        console.warn('error localstorage data');
      }
    }
  }
}

