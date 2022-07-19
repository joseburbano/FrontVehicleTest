import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

// Libs
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions: any;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }

  login(data) {
    return this.http.post(
      `${ environment.url + environment.extensions.api + environment.endpoints.signin }`, data, this.httpOptions
    );
  }

  resetPassword(password: string){
    // const user = this.afAuth.;
    // await user.
  }

  createUser(user:any){

  }

  resetPasswordEmail(email:string){

  }

  getUserInfo(){
    const uid = this.cookieService.get('uid');
    const role = this.cookieService.get('roleType');
    const info = {uid, role}; 
    return info;
  }

}
