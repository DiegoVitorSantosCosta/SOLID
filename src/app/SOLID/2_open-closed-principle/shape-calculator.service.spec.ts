import { TestBed } from '@angular/core/testing';

import { ShapeCalculatorService } from './shape-calculator.service';

describe('ShapeCalculatorService', () => {
  let service: ShapeCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShapeCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
