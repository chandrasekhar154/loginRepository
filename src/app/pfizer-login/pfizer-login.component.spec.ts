import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfizerLoginComponent } from './pfizer-login.component';

describe('PfizerLoginComponent', () => {
  let component: PfizerLoginComponent;
  let fixture: ComponentFixture<PfizerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfizerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfizerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
