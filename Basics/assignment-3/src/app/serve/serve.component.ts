import { Component } from '@angular/core';

@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrl: './serve.component.css'
})

export class ServeComponent {
  toggleDisplay = false;
  clickCount = 0;
  countArr = [];

  onToggleDetails() {
    this.toggleDisplay = !this.toggleDisplay;
  }

  onCountArray() {
    this.countArr.push(this.countArr.length + 1);
  }
}
