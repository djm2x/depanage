import { Component, OnInit, Input } from '@angular/core';
import { scrollAnimation } from '../../shared/scroll-animation';
const ASSETS = '../../../assets/';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  animations: scrollAnimation,
})
export class TitleComponent implements OnInit {
  static i = 0;
  @Input() title = '';
  img2 = '';
  @Input() section: number;
  state = 'hide';
  list = [
    // {img: ASSETS + 'skills.png'},
    {img: ASSETS + '1.jpg'},
    {img: ASSETS + '2.png'},
    {img: ASSETS + '3.jpg'},
    {img: ASSETS + '4.jpg'},
    {img: ASSETS + '5.png'},
  ];
  constructor() { }

  ngOnInit() {
    if (this.list.length === TitleComponent.i) {
      TitleComponent.i = 0;
    }
    this.img2 = this.list[TitleComponent.i++].img;
    // console.log(this.img2);
  }

  onSectionChange(pos: number) {
    // console.log(pos + '===' + this.section);
    // console.log('title = ', pos.toString() === this.section.toString());
    if (pos.toString() === this.section.toString()) {
      this.state = 'show';
    }
  }

}
