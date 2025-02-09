import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { SessionKeysEnum } from '../../../shared/session-keys.enum';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  get loading(): boolean {
    return LoadingService.getAnalysisLoadingStatus();
  }

  constructor(private router: Router) {}

  public navigateToQualityAnalysis(): void {
    this.router.navigate(['analysis/quality']);
  }

  public navigateToProductionAnalysis(): void {
    this.router.navigate(['analysis']);
  }

  logout() {
    sessionStorage.removeItem(SessionKeysEnum.AUTH);
    this.router.navigate(['']);
  }
}
