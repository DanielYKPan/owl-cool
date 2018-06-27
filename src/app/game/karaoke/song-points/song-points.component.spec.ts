import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongPointsComponent } from './song-points.component';

describe('SongPointsComponent', () => {
  let component: SongPointsComponent;
  let fixture: ComponentFixture<SongPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
