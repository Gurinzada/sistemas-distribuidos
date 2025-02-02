import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionAnalysisComponent } from './production-analysis.component';

describe('ProductionAnalysisComponent', () => {
  let component: ProductionAnalysisComponent;
  let fixture: ComponentFixture<ProductionAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductionAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductionAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
