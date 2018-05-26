import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongAudioComponent } from './song-audio.component';

describe('SongAudioComponent', () => {
  let component: SongAudioComponent;
  let fixture: ComponentFixture<SongAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
