import { Component, OnInit } from '@angular/core';
import { DrinkersService,Bar,Drinker, DrinkerBarSpent,DrinkerDateSpent } from '../drinkers.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import {ActivatedRoute} from '@angular/router'
import { HttpResponse } from '@angular/common/http';

declare const Highcharts :any;

@Component({
  selector: 'app-drinkers-time',
  templateUrl: './drinkers-time.component.html',
  styleUrls: ['./drinkers-time.component.css']
})
export class DrinkersTimeComponent implements OnInit {

  drinkerName : string; 
  dates : DrinkerDateSpent[];
  temp : any;
  constructor(
    private drinkersService: DrinkersService,
    private route: ActivatedRoute
  ) {

    this.route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinker');
      this.drinkersService.drinker_date_spent(this.drinkerName).subscribe(
        data=>{
          this.dates = data;

          console.log(data);

          const bars = [];
          const counts = [];
  
          data.forEach(date => {
            bars.push(date.Date);
            counts.push(date.Spent);
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
        text: this.drinkerName + 's purcharse records on different dates'
      },
      xAxis: {
        categories: bars,
        title: {
          text: 'Dates'
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
