import {Component} from '@angular/core';
import {GameService} from '../game.service';
import {CheckedState} from '../models/checked-state.enum';
import {User} from '../models/user';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent {
  CheckedState = CheckedState;
  xUser: User;
  oUser: User;

  constructor(public gameService: GameService) {
    this.xUser = this.gameService.users.find(user => user.state === CheckedState.X);
    this.oUser = this.gameService.users.find(user => user.state === CheckedState.O);
  }
}
