import { TestBed } from '@angular/core/testing';

import { SocketLobbyService } from './socket-lobby.service';

describe('SocketLobbyService', () => {
  let service: SocketLobbyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketLobbyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
