import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, BarController, ChartType } from 'chart.js';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxChartsModule, Color, ScaleType } from '@swimlane/ngx-charts';
import { response } from 'express'


@Component({
  selector: 'app-analytics',
  imports: [HttpClientModule, NgxChartsModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {

  number: number | null = null;
  data: any = null;
  dataKeys: string[] = [];

  single: { name: string; value: number }[] = [];
  salaryList: { name: string; value: number }[] = [];
  salarySeries: { name: string; Value: any }[] = [];

  view = [900, 500] as [number, number];

  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: [
      '#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', 
      '#FF5733', '#33FF57', '#3357FF', '#FF33A8',
      '#FF8C00', '#6A0DAD', '#40E0D0', '#FFD700',
      '#DC143C', '#32CD32', '#8A2BE2', '#00FFFF',
      '#FF4500', '#2E8B57', '#4682B4', '#B22222'
    ]
  };

  chartIndex: number = 0;
  charts = 4;

  constructor(private http: HttpClient) {  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const url = `http://localhost:8080/SoftwareInterview/Users/get-all-users`; 
    this.http.get<any>(url).subscribe(
      response => {
        const ageCounts: { [key: number]: number } = {}; 
        const salaryCounts: { [key: number]: number} = {};
        response.forEach((user: { employee_age: any; employee_salary:any }) => {  
          const age = user.employee_age;
          ageCounts[age] = (ageCounts[age] || 0) + 1;
          const salary = user.employee_salary;
          salaryCounts[salary] = (salaryCounts[salary] || 0) +1;
        });
        this.single = Object.keys(ageCounts).map(age => ({
          name: `${age}`,
          value: ageCounts[parseInt(age)]
        }));
        this.salaryList = Object.keys(salaryCounts).map(salary => ({
          name: `${salary}`,
          value: salaryCounts[parseInt(salary)]
        }));
        this.salaryList = response.map((user: { employee_age: number; employee_salary: number }, index: number) => ({
          name: `ID: ${index + 1}`,
          value: user.employee_salary
        }));
        
      },
      error => {
        console.error("Error getting data:", error);
        alert(`Error!! : Wait 30 seconds`);
      }
    );
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  nextChart() {
    this.chartIndex = (this.chartIndex + 1) % this.charts;
  }

  prevChart() {
    this.chartIndex = (this.chartIndex - 1 + this.charts) % this.charts;
}
}
