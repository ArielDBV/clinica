import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../entidades/usuario';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  
  public usuario:User = { nombre:'', password:'', mail:'', usuario: '', apellido: '', nacimiento: new Date() , tipo_usuario: 0, autorizado:1 };
  public password2:string= '';



  constructor(private router:Router, private us:UsuarioService, private ngZone:NgZone ) {
    
  }

  subirFoto(event: Event, tipo:  'perfil_foto') {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
          const result = e.target?.result as string;
          
              
              this.usuario.perfil_foto = result;
          
      };
      reader.readAsDataURL(file);
  }

}

 validarExiste(){
 return this.us.listaUsuario.filter( 
    t=> t.nombre.toLowerCase() == this.usuario.nombre.toLowerCase()).length == 1 ;
    
  }

  CamposLlenos() {
    return this.usuario.nombre && this.usuario.apellido && this.usuario.mail && this.usuario.usuario  && this.password2 && this.usuario.password === this.password2;
  }

  public registrar(){


    if(this.CamposLlenos()){

      if(this.usuario.tipo_usuario != 1)
        this.usuario.autorizado=0;
      else
      this.usuario.autorizado=1;


      // localStorage.setItem('usuarioLogueado',JSON.stringify(this.usuario));
      this.us.registrarEnApi(this.usuario).subscribe(

        x=>{
          console.log(x);
          //localStorage.setItem('usuarioLogueado',JSON.stringify(<Usuario>x));
  
          alert("Usuario creado exitosamente!");

          this.ngZone.run(() => {
          this.router.navigateByUrl('/principal/login');
        });
        

        },
        error=>{
        if (error.status === 400) {
          alert("Error: " + error.error.error);
        } else {
          alert("Ocurrió un error al crear el usuario. Por favor, inténtalo nuevamente.");
        }}
      );


    } else {
      alert('Por favor, complete todos los campos y asegúrese de que las contraseñas coincidan.');
    }

    // this.us.listaUsuario.push(this.usuario);
    // localStorage.setItem('usuarios',JSON.stringify(this.us.listaUsuario));
    // this.us.listaUsuario=JSON.parse(JSON.stringify(this.us.listaUsuario));
  
  }

  //public registrar(){
   //      this.us.listaUsuario.push(this.usuario);
    //     localStorage.setItem('usuarios', JSON.stringify(this.us.listaUsuario));
    //    this.us.listaUsuario= JSON.parse(JSON.stringify(this.us.listaUsuario)) ;
    //     this.router.navigateByUrl('/principal');
    //}

    public registrarEnApi(){
      this.us.registrar(this.usuario).subscribe(
        x =>{ 
         console.log(x);
         this.us.setLogueadoXApi(<User> x);
         this.router.navigateByUrl('/principal');
        }  
       );
    }
}
