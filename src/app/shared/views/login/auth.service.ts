import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { iUsuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false

  constructor(private router: Router) { }

  fazerLogin(usuario: iUsuario) {
    if (usuario.login === 'test@email.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      this.router.navigate(['pedidos'])
    } else {
      this.usuarioAutenticado = false;
    }
  }
}
