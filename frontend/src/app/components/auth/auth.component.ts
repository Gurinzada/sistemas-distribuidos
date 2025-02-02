import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionKeysEnum } from '../../../shared/session-keys.enum';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get('userid') as string;
    sessionStorage.setItem(SessionKeysEnum.AUTH, token);

    this.router.navigate(['analysis']);
  }
}
