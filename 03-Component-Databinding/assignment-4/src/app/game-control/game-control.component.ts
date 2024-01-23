import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {

  @Output() fireInterval = new EventEmitter<number>();

  currentNumber = 0;

  interval;

  onGameStart() {
    this.interval = setInterval(() => {
      this.fireInterval.emit(this.currentNumber + 1);
      this.currentNumber ++;
    }, 1000);
  }

  onGameStop(){
    clearInterval(this.interval);
  }
}
