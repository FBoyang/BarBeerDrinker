import { Component, OnInit } from '@angular/core';
import {BeersStatsServService, Bar, Drinker} from '../beers-stats-serv.service'
import {ActivatedRoute} from '@angular/router'
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-beers-stats',
  templateUrl: './beers-stats.component.html',
  styleUrls: ['./beers-stats.component.css']
})
export class BeersStatsComponent implements OnInit {

  beerName : string;
  topbars : Bar[];
  topdrinkers :Drinker[];

  constructor(
    private beersStatsServService: BeersStatsServService,
    private route: ActivatedRoute)
    {
      this.route.paramMap.subscribe((paramMap) => {
        this.beerName = paramMap.get('beer');

  
      });
    }
    

  ngOnInit() {
  }


}
