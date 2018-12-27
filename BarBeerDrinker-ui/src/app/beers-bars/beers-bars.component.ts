import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import {BeersStatsServService, Bar, Drinker} from '../beers-stats-serv.service'


@Component({
  selector: 'app-beers-bars',
  templateUrl: './beers-bars.component.html',
  styleUrls: ['./beers-bars.component.css']
})
export class BeersBarsComponent implements OnInit {

  beerName : string;
  topbars : Bar[];
  
  
  constructor(
    private beersStatsServService: BeersStatsServService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.beerName = paramMap.get('beer');
      this.beersStatsServService.beer_frequent_bar(this.beerName).subscribe(
        data=>{
          this.topbars = data;
        }
      )

    });
   }

  ngOnInit() {
  }

}
