import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { iUsuario } from './usuario';
import { SnackbarService } from '../../snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false

  constructor(private router: Router, private login: SnackbarService) { }

  fazerLogin(usuario: iUsuario) {
    if (usuario.login === 'test@email.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      this.router.navigate(['pedidos'])
      this.login.showMessage('Login realizado com sucesso', false)
    } else {
      this.usuarioAutenticado = false;
      this.login.showMessage('Parece que algo deu errado!', true)
    }
  }
}
