/**
 * Abstract class , nos indica que não podemos instanciar a classe diretamente, não podemos fazer
 * new Shape() neste caso.
 */
export abstract class Shape {

  /**
   * Abstract method, nesse caso area() , nos força a usar o metodo area , quando extendemos a classe pai,
   * nesse caso Shape , se uma outra classe extender shape, será obrigatorio invocar area()
   */
  abstract area(): number;

}
