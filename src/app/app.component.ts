import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule
import { RouterOutlet } from '@angular/router';
import { BmbTopBarComponent, 
  BmbThemeComponent, 
  BmbCardComponent,
  BmbCardContentComponent, 
  BmbCardFooterComponent, 
  BmbCardHeaderComponent,
  BmbLayoutDirective,
  BmbLayoutItemDirective,
  BmbDropdownComponent,
  BmbInputComponent
} from '@ti-tecnologico-de-monterrey-oficial/ds-ng';
import { FormControl } from '@angular/forms';

import { BmbCustomTextInputComponent } from './bmb-custom-text-input/bmb-custom-text-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    BmbTopBarComponent, 
    BmbThemeComponent, 
    BmbCardComponent, 
    BmbCardFooterComponent, 
    BmbCardHeaderComponent,
    BmbCardContentComponent,
    BmbLayoutDirective,
    BmbLayoutItemDirective,
    BmbDropdownComponent,
    BmbCustomTextInputComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
  
  // Control de formulario
  dropdownControl = new FormControl();
  
  // Opciones seleccionadas
  selectedOptions: string[] = [];

  // Maneja el cambio de selección
  handleSelectionChange(selected: string | string[]) {
    if (Array.isArray(selected)) {
      this.selectedOptions = selected; // Asigna las selecciones
    } else {
      const index = this.selectedOptions.indexOf(selected);
      if (index === -1) {
        this.selectedOptions.push(selected); // Agrega si no está presente
      } else {
        this.selectedOptions.splice(index, 1); // Elimina si ya estaba
      }
    }
    this.dropdownControl.setValue(this.selectedOptions); // Actualiza el control
  }

  // Eliminar una opción seleccionada
  removeSelection(index: number) {
    this.selectedOptions.splice(index, 1); // Elimina la selección
    this.dropdownControl.setValue(this.selectedOptions); // Actualiza el control
  }
}
