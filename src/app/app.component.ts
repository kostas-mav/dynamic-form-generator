import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { FormFieldControlsGroup } from './form-field/form-field.component';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fb = inject(NonNullableFormBuilder);

  formGroupData: FormFieldControlsGroup[] = [
    {
      id: this.fb.control(uuidv4()),
      title: this.fb.control('Expera'),
      content: this.fb.control('Espera'),
    },
  ];

  addSection() {
    this.formGroupData.push({
      id: this.fb.control(uuidv4()),
      title: this.fb.control('New'),
      content: this.fb.control('Newer'),
    });
  }
}
