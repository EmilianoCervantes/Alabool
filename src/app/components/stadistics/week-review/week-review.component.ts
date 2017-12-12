import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-week-review',
  templateUrl: './week-review.component.html',
  styleUrls: ['./week-review.component.css']
})
export class WeekReviewComponent {
  // Radar
  public radarChartLabels:string[] = ['Atención', 'Personas', 'Apoyo', 'Diseño', 'Programación', 'Reportes'];
 
  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55], label: 'Jimena Cortés'},
    {data: [28, 48, 40, 19, 96, 27], label: 'Geovanni Arrieta'},
    {data: [30, 25, 78, 6, 25, 81], label: 'Miguel Zavala'},
    {data: [20, 75, 67, 45, 52, 91], label: 'Geovanni Arrieta'}
  ];
  public radarChartType:string = 'radar';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}