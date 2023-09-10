import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { FormFieldControlsGroup } from './form-field/form-field.component';
import { v4 as uuidv4 } from 'uuid';
import { IPSUM_LOREM_1 } from './shared/mock-data/ipsum-lorem';

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
      name: this.fb.control('Ovidius poeta in terra Pontica esulat'),
      content: this.fb.control(IPSUM_LOREM_1),
    },
  ];

  removeSection(id: string) {
    this.formGroupData.forEach((formField, idx) => {
      if (formField.id.value === id) {
        this.formGroupData.splice(idx, 1);
      }
    });
  }

  promptSectionName() {
    const sectionName = prompt('Please enter a name for this section:');
    if (sectionName !== null) {
      this._addSection(sectionName);
    }
  }

  logFormValue() {
    if (!this.formGroupData.length) {
      console.log('Form is currently empty!');
    }
    this.formGroupData.forEach((formField) =>
      console.log(
        `ID:${formField.id.value}\nName:${formField.name.value}\nContent:${formField.content.value}`
      )
    );
  }

  private _addSection(name: string) {
    this.formGroupData.push({
      id: this.fb.control(uuidv4()),
      name: this.fb.control(name),
      content: this.fb.control(''),
    });
  }
}
