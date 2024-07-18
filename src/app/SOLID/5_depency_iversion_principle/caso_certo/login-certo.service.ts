import { Injectable } from "@angular/core";
import { IAuthenticationService } from "../interfaces/login.service.interface";


@Injectable({ providedIn: 'root' })
export class LoginCertoService implements IAuthenticationService {

  login(username: string, password: string): void {
    console.log('logou')
  }
}
