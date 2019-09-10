import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../shared/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
  animations: [ routerTransition ],
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getState(outlet: any) {
    return outlet.activatedRouteData.state;
  }

}
