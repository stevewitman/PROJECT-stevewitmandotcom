import {
  trigger,
  style,
  transition,
  animate,
} from '@angular/animations';

export const Animations = {
  pageTransition: trigger('pageTransition', [
    transition('* <=> *', [style({ opacity: 0 }), animate('400ms ease-in')]),
  ]),
};
