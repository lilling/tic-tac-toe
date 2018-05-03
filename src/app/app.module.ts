import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
//
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import {GameService} from './game.service';
import { ShowValue } from './show-value.pipe';
import { ScoreBoardComponent } from './score-board/score-board.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ShowValue,
    ScoreBoardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
