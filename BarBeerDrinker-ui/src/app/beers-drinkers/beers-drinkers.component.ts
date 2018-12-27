import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import {BeersStatsServService, Drinker} from '../beers-stats-serv.service'


@Component({
  selector: 'app-beers-drinkers',
  templateUrl: './beers-drinkers.component.html',
  styleUrls: ['./beers-drinkers.component.css']
})
export class BeersDrinkersComponent implements OnInit {

  beerName : string;
  topdrinkers : Drinker[];
  
  
  constructor(
    private beersStatsServService: BeersStatsServService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.beerName = paramMap.get('beer');

      this.beersStatsServService.beer_frequent_drinker(this.beerName).subscribe(
        data=>{
          this.topdrinkers = data;
        }
      )

    });
   }

  ngOnInit() {
  }

}
