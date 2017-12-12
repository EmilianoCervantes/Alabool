import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-annual-count',
  templateUrl: './annual-count.component.html',
  styleUrls: ['./annual-count.component.scss']
})
export class AnnualCountComponent {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2011', '2012', '2013', '2014', '2015', '2016', '2017'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Jimena Cortés'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Geovanni Arrieta'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Miguel Zavala'},
    {data: [0, 0, 0, 19, 86, 27, 90], label: 'Geovanni Arrieta'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}