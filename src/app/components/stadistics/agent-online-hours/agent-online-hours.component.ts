import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-agent-online-hours',
    templateUrl: './agent-online-hours.component.html',
    styleUrls: ['./agent-online-hours.component.scss']
})
export class AgentOnlineHoursComponent {

     // PolarArea
  public polarAreaChartLabels:string[] = ['Jimena Cortés', 'Geovanni Arrieta', 'Miguel Zavala', 'Carlos Gil'];
  public polarAreaChartData:number[] = [154, 130, 100, 134];
  public polarAreaLegend:boolean = true;
 
  public polarAreaChartType:string = 'polarArea';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
