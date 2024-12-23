import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstCompComponent } from "./first-comp/first-comp.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "Shozin's Forum";
}
