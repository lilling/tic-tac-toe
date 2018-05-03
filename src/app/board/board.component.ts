import {Component} from '@angular/core';
import {GameService} from '../game.service';
import {Cell} from '../models/cell';
import {CheckedState} from '../models/checked-state.enum';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  checkedState = CheckedState;
  constructor(public gameService: GameService) {
  }

  checkCell(cell: Cell) {
    if (cell.checked === CheckedState.None && !this.gameService.gameEnded) {
      this.gameService.checkCell(cell);
    }
  }
}
