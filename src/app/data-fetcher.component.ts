import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { json } from 'node:stream/consumers';


@Component({
    selector: 'app-data-fetcher',
    standalone: true,
    imports: [CommonModule, FormsModule, HttpClientModule],
    styleUrls: ['./data-fetcher.component.css'],
    templateUrl:'./data-fetcher.component.html'
})
export class DataFetcherComponent {
    number: number | null = null;
    data: any = null;
    dataKeys: string[] = [];
    listData: string[] = [];
    isArray: boolean = false;
    sortColumn: string | null = null;
    sortDirection: 'asc' | 'desc' = 'asc';

    constructor(private http: HttpClient) {}

    fetchData() {
        let url = this.number !== null
            ? `http://localhost:8080/Users/get-anual-salary/${this.number}`
            : `http://localhost:8080/Users/get-all-users`; 

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
                    this.data = [response];
                    this.dataKeys = Object.keys(response);
                }
            },
            error => {
                console.log(error)
                let errorMessage = 'Unknown Error';
                try{
                    const match = error.error.text.match(/"message":\s*"([^"]+)"/);
                    if (match && match[1]) {
                        errorMessage = match[1];
                        if (errorMessage == "Too Many Attempts."){
                            errorMessage = "Too Many Attempts"
                        } 
                    } else {
                        errorMessage = error.error.message || 'Unknown Error';
                    }
                } catch(e){
                    errorMessage = error.error.message;
                }
                alert(`Error!! : ${errorMessage}, Wait 30 seconds`);
            }
        );
    }

    removeProfileImage(obj: any): any {
        const newObj = { ...obj };
        delete newObj.profile_image;
        return newObj;
    }

    sortData(column: string) {
        if (this.sortColumn === column) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortColumn = column;
            this.sortDirection = 'asc';
        }

        this.data.sort((a: any, b: any) => {
            const valueA = a[column];
            const valueB = b[column];

            if (typeof valueA === 'number' && typeof valueB === 'number') {
                return this.sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
            } else {
                return this.sortDirection === 'asc' 
                    ? valueA.toString().localeCompare(valueB.toString()) 
                    : valueB.toString().localeCompare(valueA.toString());
            }
        });
    }

}
