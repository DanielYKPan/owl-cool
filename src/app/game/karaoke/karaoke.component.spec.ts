import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaraokeComponent } from './karaoke.component';

describe('KaraokeComponent', () => {
  let component: KaraokeComponent;
  let fixture: ComponentFixture<KaraokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaraokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaraokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
