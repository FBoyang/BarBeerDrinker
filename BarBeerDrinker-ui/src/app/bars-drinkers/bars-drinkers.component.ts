import { Component, OnInit } from '@angular/core';

import {BarsService, Drinker} from '../bars.service'
import {ActivatedRoute} from '@angular/router'

declare const Highcharts: any;

@Component({
  selector: 'app-bars-drinkers',
  templateUrl: './bars-drinkers.component.html',
  styleUrls: ['./bars-drinkers.component.css']
})
export class BarsDrinkersComponent implements OnInit {

  barName : string; 
  drinkers : Drinker[];

  constructor(
    private barsService: BarsService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.barName = paramMap.get('bar');
      this.barsService.bar_top_drinker(this.barName).subscribe(
        data=>{
          //this.beers = data;

          console.log(data);

        const bars = [];
        const counts = [];

        data.forEach(drinker => {
          bars.push(drinker.DrinkerName);
          counts.push(drinker.After_Tips);
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
        text: this.barName + '\'s largerst spenders'
      },
      xAxis: {
        categories: bars,
        title: {
          text: 'Drinkers'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount spent'
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
