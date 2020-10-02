
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketLobbyComponent } from './socket-lobby/socket-lobby.component';
import { SocketLobbyService } from './socket-lobby/socket-lobby.service';

import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormField  } from "@angular/material/form-field";
import {  MatButtonModule } from "@angular/material/button";
import {  MatInputModule  } from "@angular/material/input";
import {  MatListModule  } from "@angular/material/list";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'





@NgModule({
  declarations: [
    AppComponent,
    SocketLobbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [SocketLobbyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
