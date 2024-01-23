import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'assignment-4';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onFireInterval(currentNumber) {
    if (currentNumber % 2 != 0) {
      this.oddNumbers.push(currentNumber);
    }else{
      this.evenNumbers.push(currentNumber);
    }
  }
}
