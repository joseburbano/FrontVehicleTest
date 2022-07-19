import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

// Libs
import { CookieService } from "ngx-cookie-service";
import Swal from "sweetalert2";

@Component({
  selector: "app-info-vehicles",
  templateUrl: "./info-vehicles.component.html",
  styleUrls: ["./info-vehicles.component.scss"],
})
export class InfoVehicleComponent implements OnInit {
  vehicleForm: FormGroup;
  vehicleEdit: any;
  editForm = false;

  // User Login
  userAuthUid: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private cookieService: CookieService
  ){
    this.vehicleEdit = this.router.getCurrentNavigation().extras.state;
    //console.log(this.vehicleEdit);
    this.route.params.subscribe((params) => {
      this.editForm = params["status"];
    });
  }

  ngOnInit(): void {
    this.initForm();

    this.getPatchValues(this.vehicleEdit);
  }

  initForm() {
    this.vehicleForm = this.fb.group({
      brand: ["", []],
      model: ["", []],
      color: ["", []],
      assigned: ["", []],
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

  goBack() {
    this.router.navigate(["./admin/vehicles"]);
  }
}
