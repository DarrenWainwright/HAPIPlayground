import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import * as io from 'socket.io-client';
import {Observable, observable} from 'rxjs';

@Injectable()
export class SocketLobbyService {

  private socket = io('http://localhost:3000');

  constructor(private http:HttpClient) { }

  onConnectionSuccess(){
    const connectionObservable = new Observable<{status: String}>( observer=>{
      this.socket.on('socket_connected', (data)=> {
        observer.next(data);
      });

      this.socket.on('angular_request', (data) => {
        observer.next(data);
      });

      return () =>{ this.socket.disconnect();};
    });

    return connectionObservable;
  }

  sendMessage(data){
    console.log('sendMessage');
    console.log(data)
    this.socket.emit('sendSocketMessage', data);
  }
}
