import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFetcherComponent } from './data-fetcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DataFetcherComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-app-angular';
}
