import { Component, OnInit } from '@angular/core';
import { DrinkersService,Drinker, DrinkerBarSpent,DrinkerDateSpent } from '../drinkers.service';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-drinkers',
  templateUrl: './drinkers.component.html',
  styleUrls: ['./drinkers.component.css']
})
export class DrinkersComponent implements OnInit {

  //drinkerName : string; this.beerName = paramMap.get('beer');
  drinkers: Drinker[];
  DrinkerBarSpent: DrinkerBarSpent;
  DrinkerDateSpent: DrinkerDateSpent;

  originalBeersList: any[];

  constructor(
    private drinkersService : DrinkersService
    ) {
    this.drinkersService.get_drinkers().subscribe(
      data => {
        this.drinkers = data
      }
    );
  
  }


  ngOnInit() {
  }

}
