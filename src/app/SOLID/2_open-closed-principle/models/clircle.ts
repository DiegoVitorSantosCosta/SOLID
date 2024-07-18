import { Shape } from "./shape";

export class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  override area(): number {
    return this.radius * 10;
  }
}
