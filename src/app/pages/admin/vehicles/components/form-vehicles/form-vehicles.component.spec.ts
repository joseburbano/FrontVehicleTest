import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVehiclesComponent } from './form-vehicles.component';

describe('FormVehiclesComponent', () => {
  let component: FormVehiclesComponent;
  let fixture: ComponentFixture<FormVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
