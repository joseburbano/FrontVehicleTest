import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// Libs
import { CookieService } from "ngx-cookie-service";
import Swal from "sweetalert2";
// Services
// Plugins
import { VehiclesService } from "src/app/core/services/vehicles/vehicles.service";

@Component({
  selector: "app-form-vehicles",
  templateUrl: "./form-vehicles.component.html",
  styleUrls: ["./form-vehicles.component.scss"],
})
export class FormVehiclesComponent implements OnInit {
  vehicleForm: FormGroup;
  editForm: any;
  title: string;
  saveButton: boolean = false;

  vehicles: any;
  vehicleEdit: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private vehicleService: VehiclesService
  ) {
    this.vehicleEdit = this.router.getCurrentNavigation().extras.state;
    this.route.params.subscribe((params) => {
      this.editForm = params["status"];
      // console.log(this.editForm);
      if (this.editForm === "true") {
        this.title = "Editar Vehiculo";
      } else {
        this.title = "Añadir Nuevo Vehiculo";
      }
    });
  }

  ngOnInit(): void {
    this.initForm();

    if (this.vehicleEdit && this.editForm) {
      this.getPatchValues(this.vehicleEdit);
    } else if (this.editForm && !this.vehicleEdit) {
      this.router.navigate(['./admin/vehicles']);
    }
  }

  initForm() {
    this.vehicleForm = this.fb.group({
      brand: ["", [Validators.required]],
      model: ["", [Validators.required]],
      color: ["", [Validators.required]],
      assigned: ["", [Validators.required]],
    });
  }

  getPatchValues(vehicle: any) {
    this.vehicleForm.patchValue({
      brand: vehicle.brand,
      model: vehicle.model,
      color: vehicle.color,
      assigned: vehicle.assigned
    });
  }

  goCancel() {
    this.router.navigate(["./admin/vehicles"]);
  }

  createVehicle() {
    if (this.vehicleForm.valid) {
      const vehicle = this.vehicleForm.value;
      // console.log(vehicle);
      if (!this.editForm) {
        this.saveButton = true;
        this.handleCreateVehicle(vehicle);
      } else {
        this.handleUpdateVehicle(vehicle);
      }
    }
  }

  handleCreateVehicle(vehicle){
    this.vehicleService.createVehicle(vehicle).subscribe(
      (resp: any) => {
        const response = resp;
        this.vehicles = response.data.vehicles;
        // console.log(response);
        this.successAlert("Vehiculo creado con éxito", "Se ha creado un vehiculo satisfactoriamente");
      },
      (err) => {}
    );
  }

  handleUpdateVehicle(vehicle){
    // console.log(this.vehicleEdit);
    this.vehicleService.updateVehicle(vehicle, this.vehicleEdit._id).subscribe(
      (resp: any) => {
        const response = resp;
        this.vehicles = response.data.vehicles;
        // console.log(response);
        this.successAlert("Vehiculo actualizado con éxito", "Se ha actualizado un vehiculo satisfactoriamente");
      },
      (err) => {}
    );
  }

  successAlert(title: string, body: string) {
    Swal.fire(title, body, "success").then((resp) => {
      this.router.navigate(["./admin/vehicles"])
    });
  }
}
