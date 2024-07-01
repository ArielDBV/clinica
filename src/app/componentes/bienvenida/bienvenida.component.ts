import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { LoadingComponent } from '../loading/loading.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [RouterModule, MenuComponent,LoadingComponent, FormsModule],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent {

}
