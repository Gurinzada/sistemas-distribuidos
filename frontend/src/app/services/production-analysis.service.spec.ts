import { TestBed } from '@angular/core/testing';

import { ProductionAnalysisService } from './production-analysis.service';

describe('ProductionAnalysisService', () => {
  let service: ProductionAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductionAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
