import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router'; // 👈 Importar RouterModule
import { DataFetcherComponent } from './data-fetcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DataFetcherComponent], // 👈 Importar RouterModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-app-angular';
}
