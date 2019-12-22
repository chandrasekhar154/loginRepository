import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfizerHomeComponent } from './pfizer-home.component';

describe('PfizerHomeComponent', () => {
  let component: PfizerHomeComponent;
  let fixture: ComponentFixture<PfizerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfizerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfizerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
