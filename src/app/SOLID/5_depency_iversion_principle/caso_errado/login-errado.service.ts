import { IAuthenticationService } from "../interfaces/login.service.interface";


export class LoginErradoService implements IAuthenticationService {

  login(username: string, password: string): void {
    console.log('logou')
  }
}
