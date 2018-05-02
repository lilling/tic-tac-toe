import {CheckedState} from './checked-state.enum';

export class Cell {
  checked: CheckedState;

  constructor() {
    this.checked = CheckedState.None;
  }

  isFull() {
    return this.checked !== CheckedState.None;
  }
}
