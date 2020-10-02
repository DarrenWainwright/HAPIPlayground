import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketLobbyComponent } from './socket-lobby.component';

describe('SocketLobbyComponent', () => {
  let component: SocketLobbyComponent;
  let fixture: ComponentFixture<SocketLobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocketLobbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
