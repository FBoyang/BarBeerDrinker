import { Component, OnInit } from '@angular/core';
import { DrinkersService,Bar,Drinker, DrinkerBarSpent,DrinkerDateSpent } from '../drinkers.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import {ActivatedRoute} from '@angular/router'
import { HttpResponse } from '@angular/common/http';

declare const Highcharts :any;
@Component({
  selector: 'app-drinkers-bars',
  templateUrl: './drinkers-bars.component.html',
  styleUrls: ['./drinkers-bars.component.css']
})
export class DrinkersBarsComponent implements OnInit {

  drinkerName : string; 
  bars : DrinkerBarSpent[];


  constructor(
    private drinkersService: DrinkersService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinker');
      
      /*
      this.drinkersService.drinker_bar_spent(this.drinkerName).subscribe(
        data => {
          this.bars= data;
        }
      )
      */
      
      
      this.drinkersService.drinker_bar_spent(this.drinkerName).subscribe(
        data=>{
          //this.bars = data;
          console.log(data);

          const bars = [];
          const counts = [];
  
          data.forEach(bar=> {
            bars.push(bar.BarName);
            counts.push(bar.Spent);
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
        text: this.drinkerName + 's purcharse records in different bars'
      },
      xAxis: {
        categories: bars,
        title: {
          text: 'Bars'
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
