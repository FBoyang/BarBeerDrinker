import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeersComponent } from './beers/beers.component';
import { InsightComponent } from './insight/insight.component';
import {DrinkersComponent} from './drinkers/drinkers.component';
import {DrinkerDetailsComponent} from './drinker-details/drinker-details.component';
import {BeersStatsComponent} from './beers-stats/beers-stats.component'
import {BeersBarsComponent} from './beers-bars/beers-bars.component'
import {BeersDrinkersComponent} from './beers-drinkers/beers-drinkers.component'
import {BeersSellRecordComponent} from './beers-sell-record/beers-sell-record.component'
import {DrinkersBarsComponent} from './drinkers-bars/drinkers-bars.component'
import {DrinkersTimeComponent} from './drinkers-time/drinkers-time.component'
import {DrinkersBeersComponent} from './drinkers-beers/drinkers-beers.component'
import {BarsBeersComponent} from './bars-beers/bars-beers.component'
import {BarsDrinkersComponent} from './bars-drinkers/bars-drinkers.component'
import {BarsManufsComponent} from './bars-manufs/bars-manufs.component'
import {ModificationComponent} from './modification/modification.component'
import {DrinkersbarDetailsComponent} from './drinkersbar-details/drinkersbar-details.component'
import {DrinkersbarlistComponent} from './drinkersbarlist/drinkersbarlist.component'
import {BarsSellHourComponent} from './bars-sell-hour/bars-sell-hour.component'
import {BarsSellWeekdayComponent} from './bars-sell-weekday/bars-sell-weekday.component'
import {DrinkersMonthComponent} from './drinkers-month/drinkers-month.component'
import {DrinkersWeekComponent} from './drinkers-week/drinkers-week.component'
import {TransactionComponent} from './transaction/transaction.component'
import {ModBarsComponent} from './mod-bars/mod-bars.component'

import {ModCityComponent} from './mod-city/mod-city.component'
import {ModItemComponent} from './mod-item/mod-item.component'
import {ModFreqComponent} from './mod-freq/mod-freq.component'
import {ModDrinkersComponent} from './mod-drinkers/mod-drinkers.component'
import {ModLikeComponent} from './mod-like/mod-like.component'
import {ModLocComponent} from './mod-loc/mod-loc.component'
import {ModMkComponent} from './mod-mk/mod-mk.component'
import {ModSellsComponent} from './mod-sells/mod-sells.component'
import {ModIncludeComponent} from './mod-include/mod-include.component'
import {ModTransComponent} from './mod-trans/mod-trans.component'
import {HomeComponent} from './home/home.component'

import {SqlPageComponent} from './sql-page/sql-page.component'
import {ResPageComponent} from './res-page/res-page.component'
const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo:'bars'
  },
  {
    path:'static',
    pathMatch: 'full',
    redirectTo:'bars'
  },
  {
    path:'sql',
    pathMatch: 'full',
    component: SqlPageComponent
  },
  {
    path:'res',
    pathMatch: 'full',
    component: ResPageComponent
  },
  {
    path:'bars',
    pathMatch: 'full',
    component: WelcomeComponent
  },
  {
    path:'bars/:bar',
    pathMatch: 'full',
    component: BarDetailsComponent
  },
  {
    path:'bars/:bar/topbeers',
    pathMatch: 'full',
    component: BarsBeersComponent
  },
  {
    path:'bars/:bar/topdrinkers',
    pathMatch: 'full',
    component: BarsDrinkersComponent
  },
  {
    path:'bars/:bar/topmanufs',
    pathMatch: 'full',
    component: BarsManufsComponent
  },
  {
    path:'bars/:bar/sellhour',
    pathMatch: 'full',
    component: BarsSellHourComponent
  },
  {
    path:'bars/:bar/sellweekday',
    pathMatch: 'full',
    component: BarsSellWeekdayComponent
  },

  {
    path: 'beers',
    pathMatch: 'full',
    component: BeersComponent
  },
  {
    path: 'beers/:beer',
    pathMatch: 'full',
    component: BeersStatsComponent
  },  
  {
    path: 'beers/:beer/topbars',
    pathMatch: 'full',
    component: BeersBarsComponent
  }, 
  {
    path: 'beers/:beer/topdrinkers',
    pathMatch: 'full',
    component: BeersDrinkersComponent
  }, 
  {
    path: 'beers/:beer/sellrecord',
    pathMatch: 'full',
    component: BeersSellRecordComponent
  }, 
  {
    path: 'drinkers',
    pathMatch: 'full',
    component: DrinkersComponent
  },
  {
    path: 'drinkers/:drinker',
    pathMatch: 'full',
    component: DrinkerDetailsComponent
  },
  {
    path: 'drinkers/:drinker/topbeers',
    pathMatch: 'full',
    component: DrinkersBeersComponent
  },
  {
    path: 'drinkers/:drinker/bar',
    pathMatch: 'full',
    component: DrinkersBarsComponent
  },
  {
    path: 'drinkers/:drinker/barlist',//trans
    pathMatch: 'full',
    component: DrinkersbarlistComponent
  },
  {
    path: 'drinkers/:drinker/barlist/:bar',//trans
    pathMatch: 'full',
    component: DrinkersbarDetailsComponent
  },
  {
    path: 'drinkers/:drinker/barlist/:bar/:transid',//trans
    pathMatch: 'full',
    component: TransactionComponent
  },

  {
    path: 'drinkers/:drinker/date',
    pathMatch: 'full',
    component: DrinkersTimeComponent
  },
  {
    path: 'drinkers/:drinker/week',
    pathMatch: 'full',
    component: DrinkersWeekComponent
  },
  {
    path: 'drinkers/:drinker/month',
    pathMatch: 'full',
    component: DrinkersMonthComponent
  },
  {
    path: 'mod',
    pathMatch: 'full',
    component: ModificationComponent
  },
  {
    path: 'mod/bars',
    pathMatch: 'full',
    component: ModBarsComponent
  },
  {
    path: 'mod/drinkers',
    pathMatch: 'full',
    component: ModDrinkersComponent
  },
  {
    path: 'mod/city',
    pathMatch: 'full',
    component: ModCityComponent
  },
  {
    path: 'mod/freq',
    pathMatch: 'full',
    component: ModFreqComponent
  },
  {
    path: 'mod/include',
    pathMatch: 'full',
    component: ModIncludeComponent
  },
  {
    path: 'mod/items',
    pathMatch: 'full',
    component: ModItemComponent
  },
  {
    path: 'mod/like',
    pathMatch: 'full',
    component: ModLikeComponent
  },
  {
    path: 'mod/loc',
    pathMatch: 'full',
    component: ModLocComponent
  },
  {
    path: 'mod/make',
    pathMatch: 'full',
    component: ModMkComponent
  },
  {
    path: 'mod/sells',
    pathMatch: 'full',
    component: ModSellsComponent
  },
  {
    path: 'mod/trans',
    pathMatch: 'full',
    component: ModTransComponent
  },
  {
    path: 'insight',
    pathMatch: 'full',
    component: InsightComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
