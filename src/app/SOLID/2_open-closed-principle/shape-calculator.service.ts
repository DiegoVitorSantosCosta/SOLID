import { Injectable } from '@angular/core';
import { Shape } from './models/shape';

@Injectable({
  providedIn: 'root'
})
export class ShapeCalculatorService {

  constructor() { }

  calculatorArea = (shape: Shape) => {
    return shape.area();
  }
}
