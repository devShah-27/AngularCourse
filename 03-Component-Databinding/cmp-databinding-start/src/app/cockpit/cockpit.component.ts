import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();

  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    // console.log(this.serverContentInput);
    this.serverCreated.emit({ 
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value });
  }

  onAddBlueprint(contentInput: HTMLInputElement) {
    // console.log(this.serverContentInput);
    this.blueprintCreated.emit({ 
      blueprintName: contentInput.value, 
      blueprintContent: this.serverContentInput.nativeElement.value });
  }
}
