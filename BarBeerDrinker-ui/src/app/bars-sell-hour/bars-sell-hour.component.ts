import { Component, OnInit } from '@angular/core';
import {BarsService,trans_by_time} from '../bars.service'
import {ActivatedRoute} from '@angular/router'

declare const Highcharts: any;
@Component({
  selector: 'app-bars-sell-hour',
  templateUrl: './bars-sell-hour.component.html',
  styleUrls: ['./bars-sell-hour.component.css']
})
export class BarsSellHourComponent implements OnInit {

  barName : string; 
  trans : trans_by_time[];

  constructor(
    private barsService: BarsService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.barName = paramMap.get('bar');

      this.barsService.bar_by_time(this.barName).subscribe(
        data=>{
          //this.trans = data;

          console.log(data);

        const bars = [];
        const counts = [];


        //TODO:this block
        
        data.forEach(tran => {
          
          counts.push(parseInt(tran.TransNum));
          bars.push(tran.Hour);
         
        });
        console.log(counts)

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
        text: this.barName + '\'s Sales in hours'
      },
      xAxis: {
        categories: bars,
        title: {
          text: 'Time'
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
