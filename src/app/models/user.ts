import {CheckedState} from './checked-state.enum';

export class User {
  constructor(public state: CheckedState, public score = 0) {
  }
}
