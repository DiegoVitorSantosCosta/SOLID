import { Shape } from "./shape";

export class Retangle extends Shape {

  constructor(private width: number, private height: number) {
    super();
  }
  override area(): number {
    return this.height * this.width;
  }
}
