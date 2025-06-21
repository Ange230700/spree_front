// src\app\records\records-list.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { RecordsService } from '~/src/app/records/records.service';
import type { Record } from '~/src/app/records/record.model';

@Component({
  selector: 'app-records-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TableModule, ButtonModule],
  templateUrl: './records-list.component.html',
})
export class RecordsListComponent implements OnInit {
  records: Record[] = [];
  loading = false;

  /** e.g. "+0200" or "-0400" */
  get zoneOffset(): string {
    // JS getTimezoneOffset returns minutes behind UTC, so invert:
    const minutes = -new Date().getTimezoneOffset();
    const sign = minutes >= 0 ? '+' : '-';
    const abs = Math.abs(minutes);
    const h = String(Math.floor(abs / 60)).padStart(2, '0');
    const m = String(abs % 60).padStart(2, '0');
    return `${sign}${h}${m}`;
  }

  constructor(
    private readonly router: Router,
    private readonly recordsService: RecordsService,
  ) {}

  ngOnInit() {
    this.loadRecords();
  }

  async loadRecords() {
    this.loading = true;
    try {
      this.recordsService.getAll().subscribe({
        next: (data) => {
          this.records = data;
        },
        error: (err) => {
          console.error('Error loading records', err);
        },
        complete: () => {
          this.loading = false;
        },
      });
    } catch (err) {
      console.error('Error loading records', err);
      this.loading = false;
    }
  }

  onCreate() {
    this.router.navigate(['/records/new']);
  }

  onEdit(record: Record) {
    this.router.navigate(['/records', record.id, 'edit']);
  }

  async onDelete(record: Record) {
    if (!record.id) {
      return;
    }
    if (confirm('Are you sure you want to delete this record?')) {
      try {
        this.recordsService.delete(record.id);
        this.loadRecords();
      } catch (err) {
        console.error('Error deleting record', err);
      }
    }
  }
}
