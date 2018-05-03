import {Injectable} from '@angular/core';
import {Cell} from './models/cell';
import {CheckedState} from './models/checked-state.enum';

@Injectable()
export class GameService {
  winningOptions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [3, 4, 6]
  ];
  cells: Cell[];
  turnsNumber: number;
  users = [CheckedState.X, CheckedState.O];
  score = {
    [CheckedState.X]: 0,
    [CheckedState.O]: 0,
  };
  gameEnded: boolean;

  constructor() {
    this.newGame();
  }

  newGame() {
    this.gameEnded = false;
    this.turnsNumber = 0;
    this.cells = [];
    for (let i = 0; i < 9; i++) {
      this.cells.push(new Cell());
    }
  }

  checkCell(cell: Cell) {
    cell.checked = this.users[this.turnsNumber % 2];
    this.turnsNumber++;
    const winner = this.processTurn(cell.checked);

    if (winner) {
      this.endGame(winner);
    }
  }

  processTurn(currentUser: CheckedState): CheckedState {
    if (this.checkIfWon(currentUser)) {
      return currentUser;
    } else if (this.turnsNumber === 9) {
      return CheckedState.None;
    }
    return null;
  }

  checkIfWon(currentUser: CheckedState): boolean {
    return this.winningOptions.some(winOption => {
      return winOption.every(index => {
        return this.cells[index].checked === currentUser;
      });
    });
  }

  endGame(winner: CheckedState) {
    if (winner === CheckedState.None) {
      setTimeout(() => alert('its a draw'), 50);
    } else {
      this.score[winner]++;
      setTimeout(() => alert(`'the winner is: ${CheckedState[winner]}`), 50);
    }
    this.gameEnded = true;
  }
}
