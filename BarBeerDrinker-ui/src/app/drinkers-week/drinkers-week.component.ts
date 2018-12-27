import { Component, OnInit } from '@angular/core';
import { DrinkersService,Bar,Drinker, DrinkerBarSpent,DrinkerDateSpent, DrinkerWeekSpent } from '../drinkers.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import {ActivatedRoute} from '@angular/router'
import { HttpResponse } from '@angular/common/http';

declare const Highcharts :any;
@Component({
  selector: 'app-drinkers-week',
  templateUrl: './drinkers-week.component.html',
  styleUrls: ['./drinkers-week.component.css']
})
export class DrinkersWeekComponent implements OnInit {

  drinkerName : string; 
  dates : DrinkerWeekSpent[];
  temp : any;
  constructor(
    private drinkersService: DrinkersService,
    private route: ActivatedRoute
  ) {

    this.route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinker');
      this.drinkersService.drinker_week_spent(this.drinkerName).subscribe(
        data=>{
          this.dates = data;

          console.log(this.dates);

          const bars = [];
          const counts = [];
  
          this.dates.forEach(date => {
            
            bars.push(this.weekday(parseInt(date.WeekDay)));
            counts.push(parseFloat(date.Spent));
          });
  
        
          this.renderChart(bars, counts);
        }
      )

    });
   }


   weekday(i: number){
    if(i == 0)
      return 'Sunday';
      if(i == 1)
        return 'Monday';
      if(i == 2)
        return 'Tuesday';
      if(i == 3)
        return 'Wednesday';
      if(i == 4)
        return 'Thursday';
      if(i == 5)
        return 'Friday';
      if(i == 6)
        return 'Saturday';
      else
        return 'ERROR';
      
   }
  ngOnInit() {
  }
  renderChart(bars: string[], counts: number[]) {
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: this.drinkerName + 's purcharse records on different weekdays'
      },
      xAxis: {
        categories: bars,
        title: {
          text: 'Week Days'
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
