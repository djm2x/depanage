import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerTransition } from '../shared/animations';

@Component({
  selector: 'app-particulier',
  templateUrl: './particulier.component.html',
  styleUrls: ['./particulier.component.sass'],
  animations: [ routerTransition ],
})
export class ParticulierComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }

}
