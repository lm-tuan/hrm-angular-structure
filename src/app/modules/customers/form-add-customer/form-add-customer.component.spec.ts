import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddCustomerComponent } from './form-add-customer.component';

describe('FormAddCustomerComponent', () => {
  let component: FormAddCustomerComponent;
  let fixture: ComponentFixture<FormAddCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
