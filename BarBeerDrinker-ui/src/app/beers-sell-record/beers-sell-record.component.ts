import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import {BeersStatsServService, sellRecord } from '../beers-stats-serv.service'

@Component({
  selector: 'app-beers-sell-record',
  templateUrl: './beers-sell-record.component.html',
  styleUrls: ['./beers-sell-record.component.css']
})
export class BeersSellRecordComponent implements OnInit {

  beerName : string;
  sellRecord : sellRecord[];
  
  
  constructor(
    private beersStatsServService: BeersStatsServService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.beerName = paramMap.get('beer');

      this.beersStatsServService.beer_sell_record(this.beerName).subscribe(
        data=>{
          this.sellRecord = data;
        }
      )

    });
   }

   ngOnInit(){

   }
}
