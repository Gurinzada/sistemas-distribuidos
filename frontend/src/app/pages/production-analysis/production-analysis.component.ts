import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    NgxMaskDirective,
  ],
  providers: [provideNgxMask()],
  templateUrl: './production-analysis.component.html',
  styleUrl: './production-analysis.component.scss',
})
export class ProductionAnalysisComponent implements OnInit {
  public coffeeForm!: FormGroup;
  public defectOptions = [
    'grãos quebrados',
    'verdes',
    'ardidos',
    'fermentados',
    'mofo',
  ];
  public modalOpenned: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.coffeeForm = this.fb.group({
      production_costs: [null, [Validators.required, Validators.min(0)]],
      productivity: [null, [Validators.required, Validators.min(0)]],
      cost_per_bag: [null, [Validators.required, Validators.min(0)]],
      sale_price: [null, [Validators.required, Validators.min(0)]],
      fertilizer_expenses: [null, [Validators.required, Validators.min(0)]],
      labor_expenses: [null, [Validators.required, Validators.min(0)]],
      irrigation_expenses: [null, [Validators.required, Validators.min(0)]],
      transport_costs: [null, Validators.required],
    });

    LoadingService.setLoading(false);
  }

  public submitForm() {
    if (this.coffeeForm.valid) {
      console.log('Dados do Café:', this.coffeeForm.value);
    } else {
      console.log('Formulário inválido!');
    }
  }

  public hasError(controlName: string, errorType: string): boolean {
    const control = this.coffeeForm.get(controlName);
    return !!control && control.hasError(errorType) && control.touched;
  }

  public openModal(): void {
    this.modalOpenned = true;
  }

  public closeModal(): void {
    this.modalOpenned = false;
  }
}
