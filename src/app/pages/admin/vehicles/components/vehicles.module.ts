import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Route
import { VehiclesRoutingModule } from './vehicles-routing.module';

// Components
import { VehiclesComponent } from './vehicles/vehicles.component';

// Libs
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../../../shared/shared.module';
import { CountToModule } from 'angular-count-to';
import { FormVehiclesComponent } from './form-vehicles/form-vehicles.component';
import { InfoVehicleComponent } from './info-vehicles/info-vehicles.component';
import { FormUsersComponent } from './form-users/form-users.component';

@NgModule({
  declarations: [VehiclesComponent, FormVehiclesComponent, InfoVehicleComponent, FormUsersComponent],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxDatatableModule,
    SharedModule,
    CountToModule
  ]
})
export class VehiclesModule { }
