import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlopComponent } from './blop.component';

describe('BlopComponent', () => {
  let component: BlopComponent;
  let fixture: ComponentFixture<BlopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
