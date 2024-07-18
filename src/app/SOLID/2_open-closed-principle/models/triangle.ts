import { Shape } from "./shape";

export class Triangle extends Shape {

  constructor(private heigth: number, private base: number) {
    super();
  }

  override area(): number {
    return this.heigth * this.base;
  }
}
