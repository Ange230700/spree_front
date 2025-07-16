// src/app/products/productservice.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product, ApiResponse } from './products';

@Injectable()
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<ApiResponse>(this.apiUrl)
      .pipe(map((response) => response.data));
  }

  getProductsAsync(): Promise<Product[]> {
    return this.http
      .get<ApiResponse>(this.apiUrl)
      .pipe(map((response) => response.data))
      .toPromise() as Promise<Product[]>;
  }

  // Fonction utilitaire pour calculer le statut d'inventaire
  getInventoryStatus(stock: number): string {
    if (stock === 0) {
      return 'OUTOFSTOCK';
    } else if (stock <= 5) {
      return 'LOWSTOCK';
    } else {
      return 'INSTOCK';
    }
  }

  // Fonction utilitaire pour obtenir la catégorie principale
  getPrimaryCategory(categories: any[]): string {
    return categories.length > 0 ? categories[0].category_name : 'Autre';
  }
}
