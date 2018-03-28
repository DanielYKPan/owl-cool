import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPointsComponent } from './quiz-points.component';

describe('QuizPointsComponent', () => {
  let component: QuizPointsComponent;
  let fixture: ComponentFixture<QuizPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
