import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private static generalLoading: boolean = false;

  private static analysisLoading: boolean = false;

  constructor() {}

  public static setLoading(isLoading: boolean): void {
    this.generalLoading = isLoading;
  }

  public static getLoadingStatus(): boolean {
    return this.generalLoading;
  }

  public static setAnalysisLoading(isLoading: boolean): void {
    this.analysisLoading = isLoading;
  }

  public static getAnalysisLoadingStatus(): boolean {
    return this.analysisLoading;
  }
}
