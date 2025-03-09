import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


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
            error => console.error('Error fetching data:', error)
        );
    }

    removeProfileImage(obj: any): any {
        const newObj = { ...obj };
        delete newObj.profile_image;
        return newObj;
    }

}
