import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user', component: UserPageComponent },
];
