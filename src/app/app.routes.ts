import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';

export const routes: Routes = [
    {path:'**',component:LoginComponent}
];
