import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  navIsFixed = false;
  state = 'hide';
  @Output() public sectionChange = new EventEmitter<number>();
  list: Section[] = [
    // { section: 1, position: 11 },
    { name: 'education', section: 2, position: 15 },
    { name: 'skills', section: 3, position: 38 },
    { name: 'experience', section: 4, position: 57 },
    { name: 'contact', section: 5, position: 83 },
  ];
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    // console.log(this.scrollPosition);
    this.list.forEach(e => {
      if (this.scrollPosition > e.position) {
        this.sectionChange.next(e.section);
      }
    });
    // if (this.scrollPosition > 11) {
    //   this.eventsSubject.next();
    //   this.state = 'show';
    //   this.navIsFixed = true;
    // } else {
    //   // console.log('less  than 60');
    //   this.navIsFixed = false;
    //   this.state = 'hide';
    // }
  }

  get scrollPosition(): number {
    const currentScroll = window.pageYOffset || 0;
    const maxScroll = this.getMaxScroll(document);

    // Ensure that the percentage falls strictly within (0,1).
    let percent = (currentScroll / Math.max(maxScroll, 1));
    percent = Math.max(percent, 0);
    percent = Math.min(percent, 1);
    // Return the percentage in a more human-consumable format.
    // console.log(Math.round(percent * 100));
    return Math.round(percent * 100);
  }

  private getMaxScroll(node: any): number {

    // When we want to get the available scroll height of the DOCUMENT, things get
    // a little peculiar from a cross-browser consistency standpoint. As such, when
    // dealing with the Document node, we have to look in a few different places.
    // --
    // READ MORE: https://javascript.info/size-and-scroll-window
    if (node instanceof Document) {

      const scrollHeight = Math.max(
        node.body.scrollHeight,
        node.body.offsetHeight,
        node.body.clientHeight,
        node.documentElement.scrollHeight,
        node.documentElement.offsetHeight,
        node.documentElement.clientHeight
      );

      const clientHeight = node.documentElement.clientHeight;

      return (scrollHeight - clientHeight);

    } else {
      return (node.scrollHeight - node.clientHeight);
    }
  }

  // @HostListener('scroll', ['$event'])
  // private onScroll($event: Event): void {
  //   console.log($event.srcElement.scrollLeft, $event.srcElement.scrollTop);
  // }
}

interface Section {
  name: string;
  section: number;
  position: number;
}
