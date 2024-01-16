import { Component } from '@angular/core';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrl: './form-element.component.css'
})
export class FormElementComponent {

  allowReset = false;
  userName = "defaultUserName";

  onUserNameEmpty() {
    if (this.userName != '') {
      this.allowReset = true;
    }
    else {
      this.allowReset = false;
    }
    return this.allowReset;
  }

  onMakeFieldEmpty() {
    this.userName = '';
  }
}
