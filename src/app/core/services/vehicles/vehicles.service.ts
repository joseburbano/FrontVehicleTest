import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root",
})
export class VehiclesService {
  token: string;
  httpOptions: any;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.token = this.cookieService.get('token');

    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.token,
      }),
    };
  }

  getAllVehicles() {
    return this.http.get(
      `${ environment.url + environment.extensions.api + environment.endpoints.getAllVehicle }`, this.httpOptions
    );
  }

  getVehicle() {
    return this.http.get(
      `${ environment.url + environment.extensions.api + environment.endpoints.getVehicle }`, this.httpOptions
    );
  }

  getVehicleFilter(value) {
    return this.http.get(
      `${ environment.url + environment.extensions.api + environment.endpoints.getVehicleFilter + value }`, this.httpOptions
    );
  }

  createVehicle(vehicle) {
    return this.http.post(
      `${ environment.url + environment.extensions.api + environment.endpoints.createVehicle }`, vehicle, this.httpOptions
    );
  }

  createUser(user) {
    return this.http.post(
      `${ environment.url + environment.extensions.api + environment.endpoints.signup }`, user, this.httpOptions
    );
  }

  updateVehicle(vehicle, id) {
    return this.http.put(
      `${ environment.url + environment.extensions.api + environment.endpoints.updateVehicle + id }`, vehicle, this.httpOptions
    );
  }

  deleteVehicle(vehicle) {
    return this.http.delete(
      `${ environment.url + environment.extensions.api + environment.endpoints.deleteVehicle + vehicle }`, this.httpOptions
    );
  }
}
