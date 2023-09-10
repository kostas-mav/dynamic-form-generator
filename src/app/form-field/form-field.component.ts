import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from '../shared/inputs/text-input/text-input.component';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

export type FormFieldControlsGroup = {
  id: FormControl<string>;
  title: FormControl<string>;
  content: FormControl<string>;
};

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule, TextInputComponent, ReactiveFormsModule],
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
  fb = inject(NonNullableFormBuilder);

  @Input({ required: true }) fieldControlsGroup!: FormFieldControlsGroup;
}
