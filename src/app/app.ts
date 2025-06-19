// src\app\app.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '~/src/app/components/header.component';
import { FooterComponent } from '~/src/app/components/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
})
export class App {
  protected title = 'spree_front';
}
