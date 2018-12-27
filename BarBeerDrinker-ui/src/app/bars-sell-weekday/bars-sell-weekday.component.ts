import { Component, OnInit } from '@angular/core';
import {BarsService,trans_by_week} from '../bars.service'
import {ActivatedRoute} from '@angular/router'

declare const Highcharts: any;
@Component({
  selector: 'app-bars-sell-weekday',
  templateUrl: './bars-sell-weekday.component.html',
  styleUrls: ['./bars-sell-weekday.component.css']
})
export class BarsSellWeekdayComponent implements OnInit {

  barName : string; 
  manuf : any[];

  constructor(
    private barsService: BarsService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.barName = paramMap.get('bar');

      //TODO: this line
      this.barsService.bar_by_week(this.barName).subscribe(
        data=>{
          //this.beers = data;

          console.log(data);

        const bars = [];
        const counts = [];

        //TODO:this block
        data.forEach(tran => {
          bars.push(tran.WeekDay);
          counts.push(parseInt(tran.TransNum));
        });

        this.renderChart(bars, counts);
        }
      )

    });
   }


  ngOnInit() {
  }

  renderChart(bars: string[], counts: number[]) {
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: this.barName + '\'s Sales in days'
      },
      xAxis: {
        categories: bars,
        title: {
          text: 'Days'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount of Sales'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: counts
      }]
    });
  }
}
