import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionKeysEnum } from '../../../shared/session-keys.enum';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
})
export class UserPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getAuthToken();
  }

  private getAuthToken(): void {
    const cookies = document.cookie;
    const token = cookies
      .split(';')
      .find((arg) => arg.trim().startsWith('token-backend-oAuth='))
      ?.split('=')[1];

    if (token) {
      sessionStorage.setItem(SessionKeysEnum.AUTH, token);
    } else {
      this.router.navigate(['']);
    }
  }
}
