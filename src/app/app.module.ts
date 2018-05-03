import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
//
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import {GameService} from './game.service';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { GameFinishedComponent } from './game-finished/game-finished.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ScoreBoardComponent,
    GameFinishedComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent],
  entryComponents: [GameFinishedComponent]
})
export class AppModule { }
