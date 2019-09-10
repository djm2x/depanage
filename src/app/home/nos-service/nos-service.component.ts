import { Component, OnInit } from '@angular/core';

const ASSETS_PATH = '../../../assets/';
const IMG_ERR = ASSETS_PATH + 'not-found.png';

@Component({
  selector: 'app-nos-service',
  templateUrl: './nos-service.component.html',
  styleUrls: ['./nos-service.component.scss']
})
export class NosServiceComponent implements OnInit {
  list: { route: string, name: string, imgUrl: string }[];

  constructor() { }

  ngOnInit() {
    this.list = [
      { route: `/services-professionnels`, name: 'service pro', imgUrl: ''},
      { route: `/particulier`, name: 'particulier', imgUrl: ''},
    ];
  }

  imgError(img: any) {
    // console.log('er', img.src);
    img.src = IMG_ERR;
  }

}
