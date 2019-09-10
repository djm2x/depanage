import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../shared/animations';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  animations: [routerTransition],
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
