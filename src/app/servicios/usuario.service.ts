import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() {
    
   }
   public usuarioLogueado: Usuario = { nombre: '', password: '', mail: '', usuario:'', apellido: '', nacimiento: new Date() };

   public listaUsuario: User[] = [];
}
