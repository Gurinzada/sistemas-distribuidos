import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { provideNgxMask } from 'ngx-mask';
import { BehaviorSubject } from 'rxjs';
import { ProdutionAnalysisRequest } from '../../models/procution-analysis-request.model';
import { LoadingService } from '../../services/loading.service';
import { ProductionAnalysisService } from '../../services/production-analysis.service';

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
    MatProgressSpinnerModule,
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
  public aIanalisys$ = new BehaviorSubject<string>('');
  public loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private productionAnalysisService: ProductionAnalysisService,
    private cd: ChangeDetectorRef
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
    this.loading = true;
    this.closeModal();

    if (this.coffeeForm.valid) {
      const formValues = this.coffeeForm.value;

      const request: ProdutionAnalysisRequest = {
        custo_producao: formValues['production_costs'],
        produtividade: formValues['productivity'],
        custo_por_saca: formValues['cost_per_bag'],
        preco_venda: formValues['sale_price'],
        gastos_fertilizantes: formValues['fertilizer_expenses'],
        mao_de_obra: formValues['labor_expenses'],
        despesas_irrigacao: formValues['irrigation_expenses'],
        custo_transporte: formValues['transport_costs'],
      };

      this.productionAnalysisService
        .getProductionAnalysisFromIA(request)
        .subscribe(
          (res) => {
            this.aIanalisys$.next(res.response);
            this.loading = false;
          },
          (error) => {
            console.error('Erro ao obter análise:', error);
            this.loading = false;
          }
        );
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
