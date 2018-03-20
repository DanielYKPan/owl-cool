import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAboutComponent } from './game-about.component';

describe('GameAboutComponent', () => {
  let component: GameAboutComponent;
  let fixture: ComponentFixture<GameAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
