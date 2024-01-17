import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  allowNewServer = false;
  serverCreationStatus = "No server was created!"
  serverName = '';
  serverCreated = false;
  randomVariable;
  servers = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
    this.randomVariable = Math.random() > 0.5 ? 'online' : 'offline';
  }

  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server created! The server name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.randomVariable === 'online' ? 'green' : 'red';
  }
}