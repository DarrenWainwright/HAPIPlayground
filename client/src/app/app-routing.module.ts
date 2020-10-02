import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocketLobbyComponent } from './socket-lobby/socket-lobby.component';

const routes: Routes = [{
  path: '', component: SocketLobbyComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
