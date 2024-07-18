import { Component, OnInit } from '@angular/core';
import { LoginErradoService } from './login-errado.service';

@Component({
  selector: 'app-login-errado',
  standalone: true,
  imports: [],
  templateUrl: './login-errado.component.html',
  styleUrl: './login-errado.component.scss'
})
export class LoginErradoComponent implements OnInit {

  constructor() {
    /**
     * Aqui está errado porque este componente de login , esta depedendo
     * dessa instanciação , o certo seria usar o construtor para
     * injetar a depedencia.
     */
    this.loginS = new LoginErradoService()
  }
  ngOnInit(): void {
    this.loginS.login('diego', '12345')
  }

  loginS!: LoginErradoService;


}
