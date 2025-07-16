// src/app/products/products.ts

export interface Category {
  category_name: string;
}

export interface Product {
  product_name: string;
  product_price: number;
  product_stock: number;
  product_image: string;
  categories: Category[];
}

export interface ApiResponse {
  data: Product[];
  meta: {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}
