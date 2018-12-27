import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkersService, drinker_bar_trans, trans_detail } from '../drinkers.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  tranID : string
  translist : trans_detail[]

  constructor(
    private drinkersService: DrinkersService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.tranID = paramMap.get('transid');
      this.drinkersService
    .trans_detail(this.tranID)
    .subscribe(
      data => {
        this.translist = data
        
      }
    )
    });
  }

  ngOnInit() {
  }

}


/*
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkersService, drinker_bar_trans } from '../drinkers.service';

@Component({
  selector: 'app-drinkersbar-details',
  templateUrl: './drinkersbar-details.component.html',
  styleUrls: ['./drinkersbar-details.component.css']
})
export class DrinkersbarDetailsComponent implements OnInit {

  drinkerName : string; 
  barName :string;

  trans : drinker_bar_trans[]
  
  constructor(
    private drinkersService: DrinkersService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinker');
      this.barName = paramMap.get('bar');
      
    });

    //TODO: this line
    this.drinkersService.drinker_bar_trans(this.drinkerName,this.barName).subscribe(
      data => {
        this.trans= data;
      }
    )
  }
  ngOnInit() {
  }

}
*/