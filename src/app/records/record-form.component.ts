// src/app/records/record-form.component.ts

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { RecordsService } from '~/src/app/records/records.service';
import type { Record } from '~/src/app/records/record.model';

// PrimeNG modules:
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

// Angular core + RxJS
import { CommonModule } from '@angular/common';
import { switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-record-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    ButtonModule,
    RouterModule,
  ],
  templateUrl: './record-form.component.html',
})
export class RecordFormComponent implements OnInit {
  itemForm: FormGroup;
  isEdit = false;
  itemId?: number;
  loading = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly recordsService: RecordsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.itemForm = this.fb.group({
      field_1: ['', Validators.required],
      field_2: [false],
      field_3: [null, [Validators.required, Validators.min(0)]],
      field_4: [new Date(), Validators.required],
    });
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        tap((params) => {
          const id = params.get('id');
          if (id) {
            this.isEdit = true;
            this.itemId = +id;
            this.loading = true;
          }
        }),
        switchMap((params) => {
          const id = params.get('id');
          return id ? this.recordsService.getOne(+id) : of(null);
        }),
      )
      .subscribe({
        next: (record) => {
          if (record) {
            this.itemForm.patchValue(record);
          }
        },
        error: (err) => {
          console.error('Error fetching record', err);
        },
        complete: () => {
          this.loading = false;
        },
      });
  }

  onSubmit() {
    if (this.itemForm.invalid) {
      this.itemForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    const dto: Omit<Record, 'id'> = this.itemForm.value;

    const obs =
      this.isEdit && this.itemId
        ? this.recordsService.update(this.itemId, dto)
        : this.recordsService.create(dto);

    obs.subscribe({
      next: () => {
        this.router.navigate(['/records']);
      },
      error: (err) => {
        console.error('Error saving record', err);
        this.loading = false;
      },
    });
  }

  onCancel() {
    this.router.navigate(['/records']);
  }
}
