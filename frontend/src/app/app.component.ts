import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterOutlet } from '@angular/router';
import { provideNgxMask } from 'ngx-mask';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    MatProgressSpinnerModule,
    CommonModule,
  ],
  providers: [provideNgxMask()],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = 'frontend';

  get loading(): boolean {
    return LoadingService.getLoadingStatus();
  }
}
