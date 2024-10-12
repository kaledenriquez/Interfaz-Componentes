import { Component } from '@angular/core';

import { BmbDropdownComponent } from '@ti-tecnologico-de-monterrey-oficial/ds-ng';
@Component({
  selector: 'app-selectors',
  standalone: true,
  imports: [ BmbDropdownComponent ],
  templateUrl: './selectors.component.html',
  styleUrl: './selectors.component.css',
})



export class SelectorsComponent {

  // Método para manejar el cambio de valor del dropdown
  onValueChange(event: any): void {
    console.log('Valor seleccionado:', event);
    // Aquí puedes hacer lo que necesites con el valor seleccionado
  }
}