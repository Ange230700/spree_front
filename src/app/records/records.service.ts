// src\app\services\records.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '~/src/environments/environment';
import { Observable } from 'rxjs';
import type { Record } from '~/src/app/records/record.model';

@Injectable({ providedIn: 'root' })
export class RecordsService {
  private readonly apiUrl = `${environment.apiBaseUrl}/records`;

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Record[]> {
    return this.http.get<Record[]>(this.apiUrl);
  }
  getOne(id: number): Observable<Record> {
    return this.http.get<Record>(`${this.apiUrl}/${id}`);
  }
  create(data: Omit<Record, 'id'>): Observable<Record> {
    return this.http.post<Record>(this.apiUrl, data);
  }
  update(id: number, data: Partial<Record>): Observable<Record> {
    return this.http.patch<Record>(`${this.apiUrl}/${id}`, data);
  }
  delete(id: number): Observable<Record> {
    return this.http.delete<Record>(`${this.apiUrl}/${id}`);
  }
}
