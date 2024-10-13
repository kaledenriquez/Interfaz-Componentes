import { Component, ChangeDetectorRef } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { BmbInputComponent, BmbButtonDirective, BmbLayoutDirective, BmbLayoutItemDirective } from '@ti-tecnologico-de-monterrey-oficial/ds-ng';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bmb-custom-text-input',
  standalone: true,
  imports: [    ReactiveFormsModule,
    BmbButtonDirective,
    BmbInputComponent,
    BmbLayoutDirective, 
    BmbLayoutItemDirective],
  templateUrl: './bmb-custom-text-input.component.html',
  styleUrl: './bmb-custom-text-input.component.css'
})
export class BmbCustomTextInputComponent {
  userForm: FormGroup = new FormGroup({
    name: new FormControl<string>('', Validators.required),
  });
  showErrors: { [key: string]: boolean } = {};

  onSubmit() {

    if (this.userForm.valid) {
      return;
    }
    this.userForm.markAllAsTouched();
    this.updateErrorState();
  }

  updateErrorState() {
    Object.keys(this.userForm.controls).forEach((field) => {
      const control = this.userForm.get(field);
      if (control instanceof FormControl) {
        this.showErrors[field] =
          control.invalid && (control.touched || control.dirty);
      }
    });
  }

  getFormControl(name: string): FormControl {
    return this.userForm.get(name) as FormControl;
  }
}
