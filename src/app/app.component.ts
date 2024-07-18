import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AreaCalculatorComponent } from './SOLID/2_open-closed-principle/area-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AreaCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-solid';
}
