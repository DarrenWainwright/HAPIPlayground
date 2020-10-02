import { Component, OnInit } from '@angular/core';
import { SocketLobbyService  } from "./socket-lobby.service";
import { MatFormField  } from "@angular/material/form-field";
import { MatButton } from "@angular/material/button";
import { MatInput  } from "@angular/material/input";
import { MatList  } from "@angular/material/list";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@Component({
  selector: 'app-socket-lobby',
  templateUrl: './socket-lobby.component.html',
  styleUrls: ['./socket-lobby.component.css']
})

export class SocketLobbyComponent implements OnInit {

  public socketMessage = '';
  public logs = [];

  constructor(private SocketLobbyService: SocketLobbyService) { 

    this.SocketLobbyService.onConnectionSuccess().subscribe(data =>{
      console.log(`Angular connected to Socket.io: ${data.status}`);
      this.logs.push(data.status);
    });
  }

  ngOnInit(): void {
  }

  sendMessage(msg){
    this.logs.push(`client - ${msg.socketMessage}`);
    this.SocketLobbyService.sendMessage(msg);
    this.socketMessage = '';
  }

}
