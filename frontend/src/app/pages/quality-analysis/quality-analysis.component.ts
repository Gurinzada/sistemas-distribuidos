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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { BehaviorSubject } from 'rxjs';
import { QualityAnalysisRequest } from '../../models/quality-analysis-request.model';
import { QualityAnalysisService } from '../../services/quality-analysis.service';

@Component({
  selector: 'app-quality-analysis',
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
  templateUrl: './quality-analysis.component.html',
  styleUrl: './quality-analysis.component.scss',
})
export class QualityAnalysisComponent implements OnInit {
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
    private qualityAnalisysService: QualityAnalysisService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.coffeeForm = this.fb.group({
      umidade: [
        null,
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      densidade: [null, [Validators.required, Validators.min(100)]],
      tamanhoMedioGrao: [null, [Validators.required, Validators.min(0)]],
      impurezas: [
        null,
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      defeitos: [null, []],
      origemLote: [null, Validators.required],
      metodoProcessamento: [null, Validators.required],
      pontuacaoSCA: [
        null,
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
    });
  }

  public submitForm() {
    this.loading = true;
    this.closeModal();
    if (this.coffeeForm.valid) {
      const formValues = this.coffeeForm.value;

      const request: QualityAnalysisRequest = {
        defeitos: formValues['defeitos'],
        densidade: formValues['densidade'],
        impurezas: formValues['impurezas'],
        metodo_processamento: formValues['metodoProcessamento'],
        origem_lote: formValues['origemLote'],
        pontuacao_sca: formValues['pontuacaoSCA'],
        tamanho_medio_grao: formValues['tamanhoMedioGrao'],
        umidade: formValues['umidade'],
      };

      this.qualityAnalisysService
        .getQualityAnalysisFromIA(request)
        .subscribe((res) => {
          this.aIanalisys$.next(res.response);
          this.loading = false;
        });
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
