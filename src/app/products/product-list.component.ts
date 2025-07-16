// src/app/products/product-list.component.ts

import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// PrimeNG modules
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';

import { Product, Category } from './products';
import { ProductService } from './productservice';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    TagModule,
    RatingModule,
    SelectButtonModule,
  ],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit {
  layout: string = 'grid';
  products = signal<Product[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  options = [
    { label: 'Grille', value: 'grid' },
    { label: 'Liste', value: 'list' },
  ];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.loading.set(true);
    this.error.set(null);

    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des produits:', err);
        this.error.set('Erreur lors du chargement des produits');
        this.loading.set(false);
      },
      complete: () => {
        this.loading.set(false);
      },
    });
  }

  getSeverity(
    stock: number,
  ):
    | 'success'
    | 'info'
    | 'warn'
    | 'danger'
    | 'secondary'
    | 'contrast'
    | undefined {
    const status = this.productService.getInventoryStatus(stock);
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }

  getStatusLabel(stock: number): string {
    return this.productService.getInventoryStatus(stock);
  }

  getPrimaryCategory(categories: Category[]): string {
    return this.productService.getPrimaryCategory(categories);
  }
}
