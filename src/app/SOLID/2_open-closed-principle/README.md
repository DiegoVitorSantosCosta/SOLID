# Princio solid  open-close principle
 Este principio vem para eliminar a nescessidade de modificar o codigo  para um ajuste, ex:

 class AreaCalculator {
  calculate(shape) {
    if (shape.type === 'circle') {
      return Math.PI * Math.pow(shape.radius, 2);
    } else if (shape.type === 'rectangle') {
      return shape.width * shape.height;
    } else if (shape.type === 'triangle') {
      return (shape.base * shape.height) / 2;
    } else {
      throw new Error('Shape not supported');
    }
  }
}

se precisaemos ultilizar outra figura geometrica para fazer algum calculo , iamos ter que colocar outro else if, quebrando o 2 principio, Abertas para extensão mas fechadas para modificações.
Então se criarmos classes para substituir esse codigo ficaria mais clean , ex: 

 ngOnInit(): void {
    const circle = new Circle(10);
    const triangle = new Triangle(10, 8);
    const retangle = new Retangle(10, 20);
    
    this.resposeCircle = this.calculatorS.calculatorArea(circle);
    this.resposeTriangle = this.calculatorS.calculatorArea(triangle);
    this.resposeRetangle = this.calculatorS.calculatorArea(retangle);

  }
