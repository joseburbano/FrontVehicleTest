import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FormVehiclesComponent } from './form-vehicles/form-vehicles.component';
import { InfoVehicleComponent } from './info-vehicles/info-vehicles.component';
import { FormUsersComponent } from './form-users/form-users.component';

const routes: Routes = [
  {
    path: '',
    component: VehiclesComponent
  },
  {
    path: 'new',
    component: FormVehiclesComponent
  },
  {
    path: 'edit/:status',
    component: FormVehiclesComponent
  },
  {
    path: 'info',
    component: InfoVehicleComponent
  },
  {
    path: 'users',
    component: FormUsersComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
