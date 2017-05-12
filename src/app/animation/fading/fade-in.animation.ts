import { trigger, state, animate, transition, style } from '@angular/animations';


export const fadeInAnimation = {
    fadeIn: fadeIn(),
    fadeInWide: fadeInWide(),
    fadeInUp: fadeInUp(),
    fadeInUpWide: fadeInUpWide()
}

function fadeIn() {
    return trigger( 'fadeIn', [
        state( 'void', style( { position: 'fixed' }) ),
        state( '*', style( { position: 'relative' }) ),
        transition( ':enter', [
            style( { opacity: '0' }),
            animate( '0.2s ease-in', style( { opacity: '1' }) )
        ] )
    ] );
}

function fadeInWide() {
    return trigger( 'fadeInWide', [
        state( 'void', style( { position: 'fixed', width: "100%" }) ),
        state( '*', style( { position: 'relative' }) ),
        transition( ':enter', [
            style( { opacity: '0' }),
            animate( '0.2s ease-in', style( { opacity: '1' }) )
        ] ),
        /* transition( ':leave', [
             style( { transform: 'translateX(0%)' }),
             animate( '0.5s ease-in-out', style( { transform: 'translateX(100%)' }) )
         ] )*/
    ] );
}

function fadeInUp() {
    return trigger( 'fadeInUp', [
        state( 'void', style( { position: 'fixed' }) ),
        state( '*', style( { position: 'relative' }) ),
        transition( ':enter', [
            style( { opacity: '0', transform: 'translate3d(0, 100%, 0)' }),
            animate( '0.2s ease-in', style( { opacity: '1', transform: 'none' }) )
        ] )
    ] );
}

function fadeInUpWide() {
    return trigger( 'fadeInUpWide', [
        state( 'void', style( { position: 'fixed', width: '100%' }) ),
        state( '*', style( { position: 'relative' }) ),
        transition( ':enter', [
            style( { transform: 'translate3d(0, 100%, 0)', opacity: '0' }),
            animate( '1s', style( { opacity: '1', transform: 'none' }) )
        ] )
    ] );
}

// Sample

//=============================================

/*export const fadeInAnimation = trigger(
'fadeInAnimation',
[
    transition( ':enter', [
        style( { opacity: '0' }),
        animate( '3s ease-in', style( { opacity: '1' }) )
    ] )
]
);*/


// =============================================

/*import {trigger, state, animate, style, transition} from '@angular/animations';

export function routerTransition() {
  return slideToLeft();
}

function slideToRight() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'fixed', width:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
    ])
  ]);
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'fixed', width:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
  ]);
}

function slideToBottom() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%', height:'100%'}) ),
    state('*', style({position:'fixed', width:'100%', height:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateY(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(100%)'}))
    ])
  ]);
}

function slideToTop() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%', height:'100%'}) ),
    state('*', style({position:'fixed', width:'100%', height:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateY(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
    ])
  ]);
}*/