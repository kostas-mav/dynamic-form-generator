import { Component, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from '../shared/inputs/text-input/text-input.component';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { TextEditorComponent } from '../shared/inputs/text-editor/text-editor.component';
import { Subject } from 'rxjs';

export type FormFieldControlsGroup = {
  id: FormControl<string>;
  name: FormControl<string>;
  content: FormControl<string>;
};

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    TextEditorComponent,
  ],
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
  fb = inject(NonNullableFormBuilder);

  @Input({ required: true }) fieldControlsGroup!: FormFieldControlsGroup;

  @Output() remove = new Subject<null>();
}
