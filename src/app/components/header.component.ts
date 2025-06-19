// src\app\components\header.component.ts

import { Component, OnInit } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Menubar, ButtonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  colorMode: 'light' | 'dark' = 'dark';

  ngOnInit() {
    this.items = [
      // Put here the menu items. Check docs for more info.
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
