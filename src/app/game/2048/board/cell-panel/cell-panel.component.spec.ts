import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellPanelComponent } from './cell-panel.component';

describe('CellPanelComponent', () => {
  let component: CellPanelComponent;
  let fixture: ComponentFixture<CellPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
