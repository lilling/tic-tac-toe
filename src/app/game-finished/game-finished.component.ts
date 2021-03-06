import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CheckedState} from '../models/checked-state.enum';
import {GameService} from '../game.service';

@Component({
  selector: 'app-game-finished',
  templateUrl: './game-finished.component.html',
  styleUrls: ['./game-finished.component.scss']
})
export class GameFinishedComponent {
  CheckedState = CheckedState;
  text: string;

  constructor(public gameService: GameService,
    public dialogRef: MatDialogRef<GameFinishedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { winner: CheckedState }) {
    this.text = data.winner === CheckedState.None ? 'its a Draw' : `the winner is: ${CheckedState[data.winner]}`;
  }

  newGame(): void {
    this.gameService.newGame();
    this.dialogRef.close();
  }

}
