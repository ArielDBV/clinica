import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { User } from '../../entidades/usuario';
import { routes } from '../../app.routes';
import { UsuarioService } from '../../servicios/usuario.service';
import { LoadingComponent } from '../loading/loading.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, LoadingComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public usuario: User = { nombre: '', password: '', mail: '', usuario: '', apellido: '', nacimiento: new Date(), tipo_usuario: 0, autorizado:1 };
  public listaUsuario: User[] = [];
  public isLoading: boolean = false;


  constructor(private route: Router, private usuarioservices: UsuarioService) {

    if (usuarioservices.estoyLogueado()) {
      //Si ya esta logueado, reenvia a bienvenida
      this.route.navigateByUrl('/principal/bienvenida')
    }
  }

  public login() {
    //    this.route.navigateByUrl('/principal/bienvenida')
    
    this.isLoading = true;
    this.usuarioservices.loginEnApi(this.usuario).subscribe(
      x => {
        
        if ((<User>x).usuario != null)
          this.isLoading = false;
        {
          if ((<User>x).autorizado == 0) { //Si el usuario no esta habilitado, no se loguea
            alert("Su usuario aun no esta habilitado. Por favor contactarse con un administrador");
          } else {
            this.usuarioservices.setLogueadoXApi(<User>x);

            //Guardamos en el local storage el usuario logueado
            localStorage.setItem('usuarioLogueado',JSON.stringify(<User>x));
            

            //pasar a la pagina de bienvenida
            this.route.navigateByUrl('/principal/bienvenida');
          }


        }
      }

    )
    this.usuarioservices.estoyLogueado();
    this.isLoading = false;
  }

  public prueba() {
    this.usuarioservices.mostrarAPi().subscribe(t =>
      this.probando = (<any>t).mensaje
    )
  }
  public probando: string = "";
}
