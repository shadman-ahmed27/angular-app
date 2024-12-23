import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-comp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.scss'],
})
export class FirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;

  onSubmit(): void {
    this.isSubmitted = true;
  }
}
