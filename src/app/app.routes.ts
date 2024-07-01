import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ErrorComponent } from './componentes/error/error.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { usuariodeslogueadoGuard } from './guards/usuario-logueado.guard';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
 // , canActivate:[usuariodeslogueadoGuard]
export const routes: Routes = [
    {
        path: 'principal', component: PrincipalComponent,children:[
            {path:'login', component:LoginComponent},
            {path:'registro', component:RegistroComponent},
            {path:'nosotros', component:NosotrosComponent}
        ]
    },
    { path: '', redirectTo: 'principal' , pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
    
];
