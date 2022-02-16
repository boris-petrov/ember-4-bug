import { later } from '@ember/runloop';
import Helper from '@ember/component/helper';

export default class LaterHelper extends Helper {
  compute([func]) {
    later(func, 1);
  }
}
