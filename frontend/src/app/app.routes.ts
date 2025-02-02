import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductionAnalysisComponent } from './pages/production-analysis/production-analysis.component';
import { QualityAnalysisComponent } from './pages/quality-analysis/quality-analysis.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'analysis',
    component: NavbarComponent,
    children: [
      { path: '', component: ProductionAnalysisComponent },
      { path: 'quality', component: QualityAnalysisComponent },
    ],
  },
];
