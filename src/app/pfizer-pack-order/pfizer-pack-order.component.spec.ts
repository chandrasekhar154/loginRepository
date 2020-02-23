import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfizerPackOrderComponent } from './pfizer-pack-order.component';

describe('PfizerPackOrderComponent', () => {
  let component: PfizerPackOrderComponent;
  let fixture: ComponentFixture<PfizerPackOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfizerPackOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfizerPackOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
