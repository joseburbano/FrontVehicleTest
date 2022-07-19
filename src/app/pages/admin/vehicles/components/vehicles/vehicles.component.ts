import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
// Services
import { VehiclesService } from "src/app/core/services/vehicles/vehicles.service";

@Component({
  selector: "app-vehicles",
  templateUrl: "./vehicles.component.html",
  styleUrls: ["./vehicles.component.scss"],
})
export class VehiclesComponent implements OnInit {
  vehicles = [];
  userAuthUid: string;
  filter: string;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private vehicleService: VehiclesService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  addUser() {
    this.router.navigate(["./admin/vehicles/new"]);
  }

  getUsers() {
    this.vehicles = [];
    this.vehicleService.getAllVehicles().subscribe(
      (resp: any) => {
        const response = resp;
        this.vehicles = response.data.vehicles;
        // console.log(response);
      },
      (err) => {}
    );
  }

  goEdit(vehicle){
    this.router.navigate(['./admin/vehicles/edit', true], {state: vehicle} );
  }

  goView(vehicle: any) {
    this.router.navigate(["./admin/vehicles/info"], {
      state: vehicle,
    });
  }

  deleteVehicle(vehicle:any){
    this.vehicleService.deleteVehicle(vehicle._id).subscribe(
      (resp: any) => {
        const response = resp;
        // console.log(response);
        this.successAlert("Vehiculo eliminado con éxito", "Se ha eliminado el vehiculo satisfactoriamente");
      },
      (err) => {}
    );
  }

  goFilter(){
    // console.log(this.filter);
    this.vehicles = [];
    this.vehicleService.getVehicleFilter(this.filter).subscribe(
      (resp: any) => {
        const response = resp;
        this.vehicles = response.data;
        // console.log(response);
      },
      (err) => {}
    );
  }

  getLetter(){
    // console.log(this.filter.length);
    if (this.filter.length === 0){
      this.getUsers();
    }
  }

  successAlert(title: string, body: string) {
    Swal.fire(title, body, "success").then((resp) => {
      this.getUsers();
    });
  }
}
