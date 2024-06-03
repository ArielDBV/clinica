import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from '../../entidades/usuario';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  listaUsuarios: User[] = [];
  public usuario:User = {nombre:'', password:'', mail:'', usuario: '', apellido: '', nacimiento: new Date()  };
  public password2:string= '';



 // constructor(private router:Router,private us:UsuarioService ) {
    
 // }

// validarExiste(){
//  return this.us.listaUsuario.filter( 
//    t=> t.nombre.toLowerCase() == this.usuario.nombre.toLowerCase()).length == 1 ;
    
 // }

  public registrar(){
         this.listaUsuarios.push(this.usuario);
         localStorage.setItem('usuarios', JSON.stringify(this.listaUsuarios));
  //       this.us.listaUsuario= JSON.parse(JSON.stringify(this.us.listaUsuario)) ;
         
    }
}
