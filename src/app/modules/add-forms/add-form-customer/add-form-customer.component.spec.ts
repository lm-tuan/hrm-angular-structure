import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormCustomerComponent } from './add-form-customer.component';

describe('AddFormCustomerComponent', () => {
  let component: AddFormCustomerComponent;
  let fixture: ComponentFixture<AddFormCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFormCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
