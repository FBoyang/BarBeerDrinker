import { Component, OnInit } from '@angular/core';
import { DrinkersService,Bar,Drinker, DrinkerBarSpent,DrinkerDateSpent, Item } from '../drinkers.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import {ActivatedRoute} from '@angular/router'
import { HttpResponse } from '@angular/common/http';

declare const Highcharts :any;
@Component({
  selector: 'app-drinkers-beers',
  templateUrl: './drinkers-beers.component.html',
  styleUrls: ['./drinkers-beers.component.css']
})
export class DrinkersBeersComponent implements OnInit {

  drinkerName : string; 
  beers : Item[];

  constructor(
    private drinkersService: DrinkersService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinker');
      this.drinkersService.drinker_to_item(this.drinkerName).subscribe(
        data=>{
          //this.beers = data;

          console.log(data);

        const bars = [];
        const counts = [];

        data.forEach(Item => {
          bars.push(Item.Item);
          counts.push(Item.Num);
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
        text: this.drinkerName + 's purcharse records of different items'
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
          text: 'Number of purcharse'
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
