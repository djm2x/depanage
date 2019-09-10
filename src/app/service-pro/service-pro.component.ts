import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerTransition } from '../shared/animations';

@Component({
  selector: 'app-service-pro',
  templateUrl: './service-pro.component.html',
  styleUrls: ['./service-pro.component.sass'],
  animations: [ routerTransition ],
})
export class ServiceProComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }
}
