import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideColumnComponent } from './left-side-column.component';

describe('LeftSideColumnComponent', () => {
  let component: LeftSideColumnComponent;
  let fixture: ComponentFixture<LeftSideColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSideColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
