import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBoosterComponent } from './quiz-booster.component';

describe('QuizBoosterComponent', () => {
  let component: QuizBoosterComponent;
  let fixture: ComponentFixture<QuizBoosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizBoosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBoosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
