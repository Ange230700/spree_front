// src\app\components\header.component.ts

import { Component, OnInit } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Menubar, ButtonModule, CommonModule, BadgeModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  colorMode: 'light' | 'dark' = 'dark';

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      // Put here the menu items. Check docs for more info.
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => this.router.navigate(['/records']),
      },
      {
        label: 'Produits',
        icon: 'pi pi-shopping-bag',
        command: () => this.router.navigate(['/products']),
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        badge: '3',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
          },
          {
            separator: true,
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U',
          },
        ],
      },
    ];
    const savedMode = localStorage.getItem('colorMode');

    if (savedMode === 'light' || savedMode === 'dark') {
      this.colorMode = savedMode;
    } else {
      this.colorMode = document.documentElement.classList.contains(
        'prime-dark-mode',
      )
        ? 'dark'
        : 'light';
    }

    if (this.colorMode === 'dark') {
      document.documentElement.classList.add('prime-dark-mode');
    } else {
      document.documentElement.classList.remove('prime-dark-mode');
    }
  }

  toggleDarkMode() {
    const element = document.documentElement;
    if (this.colorMode === 'dark') {
      element.classList.remove('prime-dark-mode');
      this.colorMode = 'light';
    } else {
      element.classList.add('prime-dark-mode');
      this.colorMode = 'dark';
    }
    localStorage.setItem('colorMode', this.colorMode);
  }
}
