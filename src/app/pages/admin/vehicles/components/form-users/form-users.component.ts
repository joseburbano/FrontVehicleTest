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
  selector: "app-form-users",
  templateUrl: "./form-users.component.html",
  styleUrls: ["./form-users.component.scss"],
})
export class FormUsersComponent implements OnInit {
  userForm: FormGroup;
  editForm: any;
  title: string;
  saveButton: boolean = false;

  users: any;

  genders = [
    {
      id: 0,
      name: "Masculino",
      genderType: "M",
    },
    {
      id: 1,
      name: "Femenino",
      genderType: "F",
    }
  ];

  gender: any;
  changeGender = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private cookieService: CookieService,
    private vehicleService: VehiclesService
  ) {
    this.title = "Agregar Usuarios";
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.fb.group({
      name: ["", [Validators.required]],
      userName: ["", [Validators.required]],
      identifier: ["", [Validators.required]],
      telephone: ["", [Validators.required]],
      email: ["", [Validators.required]],
      birthDate: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      password: ["", [Validators.required]],
      repeatPassword: ["", [Validators.required]],
    });
  }

  saveGender(event: any){
    const index = Number(event.target.value);
    this.gender = this.genders[index];
    this.changeGender = true;
  }

  handleCreateUser(){
    if (this.userForm.valid) {
      if (!this.editForm) {
        this.createUser(this.userForm.value);
      }
    }
  }

  createUser(user:any){
    const userFinal = {
      name: user.name,
      userName: user.userName,
      identifier: user.identifier,
      telephone: user.telephone,
      email: user.email,
      birthDate: new Date(user.birthDate),
      gender: this.gender.genderType,
      password: user.password,
      repeatPassword: user.repeatPassword,
    }
    // console.log(userFinal);

    this.vehicleService.createUser(userFinal).subscribe(
      (resp: any) => {
        const response = resp;
        // console.log(response);
        this.successAlert("Usuario creado con éxito", "Se ha creado un usuario satisfactoriamente");
      },
      (err) => {}
    );
  }

  successAlert(title: string, body: string) {
    Swal.fire(title, body, "success").then((resp) => {
      this.router.navigate(["./admin"])
    });
  }

}
