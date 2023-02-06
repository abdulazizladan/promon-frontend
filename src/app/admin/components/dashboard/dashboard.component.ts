import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartConfiguration } from 'chart.js';
import { NgChartsConfiguration } from 'ng2-charts';
import { Observable, of } from 'rxjs';
import { Stats } from '../../models/stats.model';
import { loadStats } from '../../store/actions/dashboard.actions';
import { AdminState } from '../../store/reducers/admin.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public chartDataReady: boolean  = true;

  public admin$: Observable<Stats>;

  public barChartLegend: boolean = true;

  public barChartPlugins: any[] = [];

  public config: NgChartsConfiguration = {}

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2016', '2017', '2018', '2019', '2020', '2021', '2022' ],
    datasets: [
      {
        data: [ 65000, 59000, 80000, 81000, 56000, 55000, 40000 ],
        label: 'Revenue',
        backgroundColor: "#ffa82e",
        barThickness: 20,
        hoverBackgroundColor: "rgb(166, 109, 10)"
      },
      {
        data: [ 28000, 48000, 40000, 19000, 86000, 27000, 90000 ],
        label: 'Expenses',
        backgroundColor: "#303030",
        barThickness: 20,
        hoverBackgroundColor: "#242424"
      }
    ]

  };

  public chartColors: Array<any> = [
    { // first color
      backgroundColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
    { // second color
      backgroundColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }];

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true
  };

  constructor( private store: Store<{ admin: AdminState }>) {
    this.admin$ = this.store.select((admin) => admin.admin.stats).pipe()
   }

  ngOnInit(): void {
    this.store.dispatch(loadStats());
  }

}
