import { CanActivateFn, CanDeactivateFn } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { inject } from '@angular/core';

export const usuarioLogueadoGuard: CanActivateFn = (route, state) => {

  var serv =inject(UsuarioService);
  return serv.estoyLogueado();
};

export const usuariodeslogueadoGuard: CanActivateFn = (route, state) => {

  var serv = inject(UsuarioService);

   return serv.usuarioLogueado.usuario == '';
};
