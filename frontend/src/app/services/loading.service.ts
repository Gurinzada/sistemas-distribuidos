import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private static generalLoading: boolean = false;

  constructor() {}

  public static setLoading(isLoading: boolean): void {
    this.generalLoading = isLoading;
  }

  public static getLoadingStatus(): boolean {
    return this.generalLoading;
  }
}
