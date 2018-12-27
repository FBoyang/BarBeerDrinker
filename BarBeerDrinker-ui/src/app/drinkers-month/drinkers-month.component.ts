import { Component, OnInit } from '@angular/core';
import { DrinkersService,Bar,Drinker, DrinkerBarSpent,DrinkerDateSpent, DrinkerMonthSpent } from '../drinkers.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import {ActivatedRoute} from '@angular/router'
import { HttpResponse } from '@angular/common/http';

declare const Highcharts :any;

@Component({
  selector: 'app-drinkers-month',
  templateUrl: './drinkers-month.component.html',
  styleUrls: ['./drinkers-month.component.css']
})
export class DrinkersMonthComponent implements OnInit {

  drinkerName : string; 
  dates : DrinkerMonthSpent[];
  temp : any;
  constructor(
    private drinkersService: DrinkersService,
    private route: ActivatedRoute
  ) {

    this.route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinker');
      this.drinkersService.drinker_month_spent(this.drinkerName).subscribe(
        data=>{
          this.dates = data;

          console.log(data);

          const bars = [];
          const counts = [];
  
          data.forEach(date => {
            bars.push(parseInt(date.Month));
            counts.push(parseFloat(date.Spent));
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
        text: this.drinkerName + 's purcharse records on different months'
      },
      xAxis: {
        categories: bars,
        title: {
          text: 'Monthes'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Spending'
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
