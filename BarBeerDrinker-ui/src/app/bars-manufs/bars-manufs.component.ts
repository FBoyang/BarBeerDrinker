import { Component, OnInit } from '@angular/core';
import {BarsService,Manuf} from '../bars.service'
import {ActivatedRoute} from '@angular/router'

declare const Highcharts: any;

@Component({
  selector: 'app-bars-manufs',
  templateUrl: './bars-manufs.component.html',
  styleUrls: ['./bars-manufs.component.css']
})
export class BarsManufsComponent implements OnInit {

  barName : string; 
  manuf : Manuf[];

  constructor(
    private barsService: BarsService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.barName = paramMap.get('bar');
      this.barsService.bar_top_manf(this.barName).subscribe(
        data=>{
          //this.beers = data;

          console.log(data);

        const bars = [];
        const counts = [];

        data.forEach(man => {
          bars.push(man.manf);
          counts.push(man.Amount);
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
        text: this.barName + '\'s Best Manufactures'
      },
      xAxis: {
        categories: bars,
        title: {
          text: 'Manufactures'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount sold'
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
