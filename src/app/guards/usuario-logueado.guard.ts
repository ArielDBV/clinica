import { CanActivateFn, CanDeactivateFn } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { inject } from '@angular/core';

export const usuarioLogueadoGuard: CanActivateFn = (route, state) => {

  var usServ =inject(UsuarioService);
  return usServ.estoyLogueado();
};

export const usuariodeslogueadoGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {

  var usServ =inject(UsuarioService);
  return usServ.usuarioLogueado.usuario == '';
};
