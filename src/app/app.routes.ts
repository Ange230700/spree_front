// src\app\app.routes.ts

import { Routes } from '@angular/router';
import { RecordsListComponent } from '~/src/app/records/records-list.component';
import { RecordFormComponent } from '~/src/app/records/record-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/records', pathMatch: 'full' },
  { path: 'records', component: RecordsListComponent },
  { path: 'records/new', component: RecordFormComponent },
  { path: 'records/:id/edit', component: RecordFormComponent },
];
