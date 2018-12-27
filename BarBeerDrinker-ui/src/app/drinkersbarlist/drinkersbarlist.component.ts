import { Component, OnInit } from '@angular/core';
import {DrinkersService, DrinkerBarSpent} from '../drinkers.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drinkersbarlist',
  templateUrl: './drinkersbarlist.component.html',
  styleUrls: ['./drinkersbarlist.component.css']
})
export class DrinkersbarlistComponent implements OnInit {

  drinkerName : string; 
  bars : DrinkerBarSpent[];
  
  constructor(
    private drinkersService: DrinkersService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinker');
      
      
    });

    this.drinkersService.drinker_bar_spent(this.drinkerName).subscribe(
      data => {
        this.bars= data;
      }
    )
  }
  ngOnInit() {
  }

}
