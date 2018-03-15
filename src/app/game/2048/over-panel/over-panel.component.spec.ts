import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverPanelComponent } from './over-panel.component';

describe('OverPanelComponent', () => {
  let component: OverPanelComponent;
  let fixture: ComponentFixture<OverPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
