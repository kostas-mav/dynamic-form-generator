import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
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
      name: this.fb.control('Expera'),
      content: this.fb.control('Espera'),
    },
  ];

  promptSectionName() {
    const sectionName = prompt('Please enter a string value:');
    if (sectionName !== null) {
      console.log('User input:', sectionName);
      this.addSection(sectionName);
    }
  }

  addSection(name: string) {
    this.formGroupData.push({
      id: this.fb.control(uuidv4()),
      name: this.fb.control(name),
      content: this.fb.control('Newer'),
    });
  }
}
