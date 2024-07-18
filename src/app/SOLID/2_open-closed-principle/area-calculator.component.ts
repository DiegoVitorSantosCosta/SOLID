import { Component, inject, OnInit } from '@angular/core';
import { Circle } from './models/clircle';
import { Retangle } from './models/rectangle';
import { Triangle } from './models/triangle';
import { ShapeCalculatorService } from './shape-calculator.service';

@Component({
  selector: 'app-area-calculator',
  standalone: true,
  imports: [],
  templateUrl: './area-calculator.component.html',
  styleUrl: './area-calculator.component.scss'
})
export class AreaCalculatorComponent implements OnInit {

  calculatorS: ShapeCalculatorService = inject(ShapeCalculatorService);

  resposeCircle!: number
  resposeTriangle!: number
  resposeRetangle!: number

  ngOnInit(): void {
    const circle = new Circle(10);
    const triangle = new Triangle(10, 8);
    const retangle = new Retangle(10, 20);

    this.resposeCircle = this.calculatorS.calculatorArea(circle);
    this.resposeTriangle = this.calculatorS.calculatorArea(triangle);
    this.resposeRetangle = this.calculatorS.calculatorArea(retangle);

  }

}
