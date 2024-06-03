import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { User } from '../../entidades/usuario';
import { routes } from '../../app.routes';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public usuario: User = { nombre: '', password: '', mail: '', usuario:'', apellido: '', nacimiento: new Date() };

  constructor(private route:Router, private usuarioservices: UsuarioService) {

    if (usuarioservices.estoyLogueado()) {
      this.route.navigateByUrl('/principal/bienvenida')
    }
  }

  public login(){
//    this.route.navigateByUrl('/principal/bienvenida')
  }

  public prueba() {
    this.usuarioservices.mostrarAPi().subscribe(t =>
      this.probando = (<any>t).mensaje
    )
  }
  public probando: string = "";
}
