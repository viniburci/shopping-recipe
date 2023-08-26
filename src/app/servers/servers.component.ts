import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  serverId = 10;
  serverStatus = 'offline';
  serverName = '';
  serverCreated = false;
  servers = ['Servidor 1', 'Servidor teste']

  allowNewServer = false;

  constructor () {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
    this.serverStatus = Math.random() > 0.5? 'online': 'offline';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateServer() {
    this.serverStatus = 'online';
    this.serverCreated = true;
    this.servers.push(this.serverName);

  }

  getColor(){
    return this.serverStatus === 'online'? 'green': 'red';
  }
}
