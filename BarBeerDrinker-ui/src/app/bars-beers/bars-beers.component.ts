import { Component, OnInit } from '@angular/core';
import {BarsService, Item} from '../bars.service'
import {ActivatedRoute} from '@angular/router'

declare const Highcharts: any;
@Component({
  selector: 'app-bars-beers',
  templateUrl: './bars-beers.component.html',
  styleUrls: ['./bars-beers.component.css']
})
export class BarsBeersComponent implements OnInit {

  barName : string; 
  beers : Item[];

  constructor(
    private barsService: BarsService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.barName = paramMap.get('bar');
      this.barsService.bar_top_item(this.barName).subscribe(
        data=>{
          //this.beers = data;

          console.log(data);

        const bars = [];
        const counts = [];

        data.forEach(Item => {
          bars.push(Item.Item);
          counts.push(Item.Amount);
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
        text: this.barName + 's selling records of different items'
      },
      xAxis: {
        categories: bars,
        title: {
          text: 'Items'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of sells'
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
