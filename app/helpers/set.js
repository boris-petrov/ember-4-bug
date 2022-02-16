import Helper from '@ember/component/helper';
import { set } from '@ember/object';

export default class SetHelper extends Helper {
  compute(positional) {
    const [target, path, value] = positional;
    return () => set(target, path, value);
  }
}
