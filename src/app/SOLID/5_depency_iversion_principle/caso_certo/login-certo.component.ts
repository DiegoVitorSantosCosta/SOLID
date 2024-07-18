import { Component, inject, OnInit } from '@angular/core';
import { LoginCertoService } from './login-certo.service';

@Component({
  selector: 'app-login-certo',
  standalone: true,
  imports: [],
  templateUrl: './login-certo.component.html',
  styleUrl: './login-certo.component.scss'
})
export class LoginCertoComponent implements OnInit {

  ngOnInit(): void {
    this.loginS.login('diego', '1234')
  }
  loginS: LoginCertoService = inject(LoginCertoService);


}
