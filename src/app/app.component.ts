import {Component} from '@angular/core';
import {GameService} from './game.service';
import {CheckedState} from './models/checked-state.enum';
import {MatDialog} from '@angular/material';
import {GameFinishedComponent} from './game-finished/game-finished.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public gameService: GameService, public dialog: MatDialog) {
    this.gameService.winner.asObservable().subscribe(winner => {
      if (this.gameService.gameEnded) {
        this.openDialog(winner);
      }
    });
  }

  openDialog(winner: CheckedState): void {
    this.dialog.open(GameFinishedComponent, {
      width: '250px',
      data: { winner }
    });
  }
}
