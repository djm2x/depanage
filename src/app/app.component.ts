import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './shared/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isConnected = false;
  user = {};
  constructor(public router: Router, private session: SessionService) { }

  ngOnInit() {
    this.session.notif.subscribe(
      r => {
        console.log(r);
        this.isConnected = (r as any).is;
        this.user = (r as any).user;
      }
    );
    // if (this.session.isSignedIn) {
    //   this.isConnected = true;
    //   this.user = this.session.user;
    // }
    // this.session.notif.subscribe(
    //   r => {
    //     this.isConnected = r.is;
    //     this.user = r.user;
    //     console.log(r);
    //   }
    // );
  }

  disconnect() {
    this.session.doSignOut();
  }
}
