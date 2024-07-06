import { Injectable } from '@angular/core';
import { User } from '../entidades/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private APIURL:String = "https://ariel_david9895-clinicaapi.mdbgo.io";

  public usuarioLogueado: User = { nombre: '', password: '', mail: '', usuario:'', apellido: '', nacimiento: new Date(), tipo_usuario: 0, autorizado:1 };

  public listaUsuario: User[] = [];


  constructor(public http:HttpClient) {
    //this.listaUsuario = JSON.parse(localStorage.getItem('usuarioLogueado') || '[]');
    this.listaUsuario = JSON.parse(localStorage.getItem('usuarios') || '[]');
    this.usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado") ?? '{"nombre":""}');
    this.setLogueado()
   }

   public mostrarAPi() {
    return this.http.get(this.APIURL + "/pruebajson");
  }

  public loginEnApi(usuario:User){
    return this.http.post(this.APIURL  + "/login",usuario);
  }

  public setLogueadoXApi(usuario:User){
    this.usuarioLogueado = usuario;
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
  }

  public registrar(usuario:User){
    return this.http.post(this.APIURL  + "/insertar",usuario);
  }

  
   public estoyLogueado() :boolean{
    return this.usuarioLogueado.nombre != '';
  }

  public desloguear() 
    {
      this.usuarioLogueado = { nombre: '', password: '', mail: '', usuario: '', apellido: '', nacimiento: new Date(), tipo_usuario: 0, autorizado:1 };
      localStorage.setItem("usuarioLogueado", JSON.stringify(this.usuarioLogueado));
    }

  public setLogueado(){
    if (localStorage.getItem('usuarioLogueado') ?? '' != '')
      this.usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado') ?? '');
  }
  
}
