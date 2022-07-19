import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVehicleComponent } from './info-vehicles.component';

describe('InfoVehicleComponent', () => {
  let component: InfoVehicleComponent;
  let fixture: ComponentFixture<InfoVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
