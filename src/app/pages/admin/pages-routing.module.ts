import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',  loadChildren: () => import('./dashboard/components/dashboard.module').then(m => m.DashboardModule) },
  { path: 'vehicles',  loadChildren: () => import('./vehicles/components/vehicles.module').then(m => m.VehiclesModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
