import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QualityAnalysisRequest } from '../models/quality-analysis-request.model';

@Injectable({
  providedIn: 'root',
})
export class QualityAnalysisService {
  constructor(private http: HttpClient) {}

  public getQualityAnalysisFromIA(
    request: QualityAnalysisRequest
  ): Observable<any> {
    return this.http.post<any>(
      'http://localhost:3000/quality-control',
      request
    );
  }
}
