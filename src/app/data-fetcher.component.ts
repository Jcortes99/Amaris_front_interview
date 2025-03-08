import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-data-fetcher',
    standalone: true,
    imports: [CommonModule, FormsModule, HttpClientModule],
    template: `
        <div class="container">
        <input type="number" [(ngModel)]="number" placeholder="Ingrese un número" class="input-box" />
        <button (click)="fetchData()" class="btn">Obtener Datos</button>
        
        <table *ngIf="data && !isArray" class="data-table">
            <thead>
            <tr>
                <th *ngFor="let key of dataKeys">{{ key }}</th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let row of data">
                <td *ngFor="let key of dataKeys">{{ row[key] }}</td>
            </tr>
            </tbody>
        </table>
        
        <ul *ngIf="isArray" class="data-list">
            <li *ngFor="let item of listData">{{ item }}</li>
        </ul>
        </div>
    `,
    styles: [`
        .container { max-width: 400px; margin: auto; padding: 20px; }
        .input-box { margin-bottom: 10px; display: block; width: 100%; padding: 8px; }
        .btn { display: block; width: 100%; padding: 10px; background-color: #007bff; color: white; border: none; cursor: pointer; }
        .data-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        .data-table th, .data-table td { border: 1px solid black; padding: 8px; text-align: left; }
    `]
})
export class DataFetcherComponent {
    number: number | null = null;
    data: any = null;
    dataKeys: string[] = [];
    listData: string[] = [];
    isArray: boolean = false;

    constructor(private http: HttpClient) {}

    fetchData() {
        let url = this.number !== null
            ? `http://localhost:8080/Users/get-anual-salary/${this.number}`
            : `http://localhost:8080/Users/get-all-names`; 

        this.http.get<any>(url).subscribe(
            response => {
                if (Array.isArray(response)) {
                    if (response.length > 0 && typeof response[0] === 'object') {
                        this.isArray = false;
                        this.data = response;
                        this.dataKeys = Object.keys(response[0]);
                    } else {
                        this.isArray = true;
                        this.listData = response;
                        this.data = null;
                    }
                } else {
                    this.isArray = false;
                    this.data = [response]; // Convertir objeto en array para manejar en la tabla
                    this.dataKeys = Object.keys(response);
                }
            },
            error => console.error('Error fetching data:', error)
        );
    }
}
