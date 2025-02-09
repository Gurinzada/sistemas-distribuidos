import { TestBed } from '@angular/core/testing';

import { QualityAnalysisService } from './quality-analysis.service';

describe('QualityAnalysisService', () => {
  let service: QualityAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualityAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
