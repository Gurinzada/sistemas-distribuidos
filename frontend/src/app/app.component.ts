import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideNgxMask } from 'ngx-mask';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  providers: [provideNgxMask()],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = 'frontend';
}
