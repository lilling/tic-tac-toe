import {Component, OnInit} from '@angular/core';
import {GameService} from '../game.service';
import {CheckedState} from '../models/checked-state.enum';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {
  CheckedState = CheckedState;

  constructor(public gameService: GameService) {
  }

  ngOnInit() {
  }

}
