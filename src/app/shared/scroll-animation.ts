import {
  style, animate, animation, animateChild, useAnimation, group, sequence,
  transition, state, trigger, query, stagger
} from '@angular/animations';


export const scrollAnimation = [
  trigger('scrollAnimation', [
      state('show', style({
          opacity: 1,
          transform: 'translateX(0)'
      })),
      state('hide', style({
          opacity: 0,
          transform: 'translateY(15%)'
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('1000ms 0ms ease-out'))
  ]),
  trigger('scrollTitle', [
      state('show', style({
          opacity: 1,
          transform: 'translateX(0)'
      })),
      state('hide', style({
          opacity: 0,
          transform: 'translateY(-15%)'
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('1000ms 0ms ease-out'))
  ]),
  // nice stagger effect when showing existing elements
  // trigger('list', [
  //     transition(':enter', [
  //         // child animation selector + stagger
  //         query('@items',
  //             stagger(300, animateChild())
  //         )
  //     ]),
  // ]),
  // trigger('items', [
  //     // cubic-bezier for a tiny bouncing feel
  //     transition(':enter', [
  //         style({ transform: 'scale(0.5)', opacity: 0 }),
  //         animate('1s cubic-bezier(.8,-0.6,0.2,1.5)',
  //             style({ transform: 'scale(1)', opacity: 1 }))
  //     ]),
  //     transition(':leave', [
  //         style({ transform: 'scale(1)', opacity: 1, height: '*' }),
  //         animate('1s cubic-bezier(.8,-0.6,0.2,1.5)',
  //             style({ transform: 'scale(0.5)', opacity: 0, height: '0px', margin: '0px' }))
  //     ]),
  // ])
];
