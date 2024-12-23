import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageDetailsComponent } from '../message-details/message-details.component';

@Component({
  selector: 'app-first-comp',
  standalone: true,
  imports: [FormsModule, CommonModule, MessageDetailsComponent],
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.scss'],
})
export class FirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  onSubmit(): void {
    this.isSubmitted = true;
    this.messages.push({
      name: this.name,
      email: this.email,
      message: this.message,
    });
    console.log(this.messages);
  }
}
