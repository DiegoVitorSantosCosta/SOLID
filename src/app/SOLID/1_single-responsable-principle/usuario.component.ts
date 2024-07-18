import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent {

  usersList: Array<String> = [];
  createUserName = (name: string) => {
    this.usersList.push(name);
  }

  deleteUser = (userName: string): Boolean => {
    const deleted = this.usersList.splice(this.usersList.indexOf(userName));
    return deleted ? true : false;
  }



}
