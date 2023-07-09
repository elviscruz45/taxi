import {colors} from './colors';
import type {Colors} from './colors';
import type {Shadows} from './shadows';
import {shadows} from './shadows';

export const theme = {colors, shadows};

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    shadows: Shadows;
  }
}
