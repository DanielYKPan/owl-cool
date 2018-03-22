import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameGalleryComponent } from './game-gallery.component';

describe('GameGalleryComponent', () => {
  let component: GameGalleryComponent;
  let fixture: ComponentFixture<GameGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
