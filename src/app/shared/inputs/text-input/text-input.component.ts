import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  @Input() placeholder = '';
  @Input() control: FormControl = new FormControl('');

  ngOnInit(): void {
    this.control.valueChanges.pipe(tap(console.log)).subscribe();
  }
}
