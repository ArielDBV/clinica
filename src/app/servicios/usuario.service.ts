import { Injectable } from '@angular/core';
import { User } from '../entidades/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http:HttpClient) {
    this.listaUsuario = JSON.parse(localStorage.getItem('usuarios') || '[]');
   // this.setLogueado()
   }

   public mostrarAPi() {
    return this.http.get("https://ariel_david9895-clinicaapi.mdbgo.io/pruebajson");
  }

   public usuarioLogueado: User = { nombre: '', password: '', mail: '', usuario:'', apellido: '', nacimiento: new Date() };

   public listaUsuario: User[] = [];

   public estoyLogueado() :boolean{
    return this.usuarioLogueado.nombre != '';
  }
  
}
