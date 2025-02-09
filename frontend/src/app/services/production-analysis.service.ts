import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutionAnalysisRequest } from '../models/procution-analysis-request.model';

@Injectable({
  providedIn: 'root',
})
export class ProductionAnalysisService {
  constructor(private http: HttpClient) {}

  public getProductionAnalysisFromIA(
    request: ProdutionAnalysisRequest
  ): Observable<any> {
    return this.http.post<any>('http://localhost:3000/cost-control', request);
  }
}
