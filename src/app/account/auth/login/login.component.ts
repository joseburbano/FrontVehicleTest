import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

// Libs
import { CookieService } from "ngx-cookie-service";
import Swal from "sweetalert2";

// Services
import { AuthService } from "src/app/core/services/auth/auth.service";

type UserFields = "email" | "password";
type FormErrors = {
  [u in UserFields]: string;
};

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  // User
  userData: any;

  public newUser = false;
  public loginForm: FormGroup;
  public formErrors: FormErrors = {
    email: "",
    password: "",
  };
  public errorMessage: any;
  public loginButton = false;
  public errorGeneral = "";

  email: any;
  password: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cookieService: CookieService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.cookieService.deleteAll();
  }

  login() {
    this.router.navigate(["./admin"]);
  }

  handleLogin() {
    let data = {
      "email": this.email,
      "password": this.password
    }
    this.authService.login(data).subscribe(
      (resp: any) => {
        const response = resp;
        this.handleCookieAsigned(response);

      },
      (err) => {
        this.loginButton = false;
      }
    );
  }

  async handleCookieAsigned(data) {
    this.cookieService.set('token', data.data.token);
    this.cookieService.set("user", data.data.user);
    this.router.navigate(["./admin"])
  }

  userDisable() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Parece que tu usuario no se encuentra activo.",
      footer: "<a href>Contactar con soporte.</a>",
    });
  }

  errorAlert(title: string, body: string) {
    Swal.fire(title, body, "error").then((resp) => {
      this.loginButton = false;
    });
  }

  handleFirebaselogout() {}
}
