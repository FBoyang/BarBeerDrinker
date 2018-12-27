import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeersComponent } from './beers/beers.component';
import { InsightComponent } from './insight/insight.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DrinkerDetailsComponent} from './drinker-details/drinker-details.component';
import { BeersBarsComponent } from './beers-bars/beers-bars.component';
import { BeersStatsComponent } from './beers-stats/beers-stats.component';
import { BeersDrinkersComponent } from './beers-drinkers/beers-drinkers.component';
import { BeersSellRecordComponent } from './beers-sell-record/beers-sell-record.component';
import { DrinkersComponent } from './drinkers/drinkers.component';
import { DrinkersBarsComponent } from './drinkers-bars/drinkers-bars.component';
import { DrinkersTimeComponent } from './drinkers-time/drinkers-time.component';
import { DrinkersBeersComponent } from './drinkers-beers/drinkers-beers.component';
import { DrinkersTransComponent } from './drinkers-trans/drinkers-trans.component';
import { BarsDrinkersComponent } from './bars-drinkers/bars-drinkers.component';
import { BarsBeersComponent } from './bars-beers/bars-beers.component';
import { BarsManufsComponent } from './bars-manufs/bars-manufs.component';
import { ModificationComponent } from './modification/modification.component';
import { DrinkersbarDetailsComponent } from './drinkersbar-details/drinkersbar-details.component';
import { DrinkersbarlistComponent } from './drinkersbarlist/drinkersbarlist.component';
import { BarsSellWeekdayComponent } from './bars-sell-weekday/bars-sell-weekday.component';
import { BarsSellHourComponent } from './bars-sell-hour/bars-sell-hour.component';
import { DrinkersWeekComponent } from './drinkers-week/drinkers-week.component';
import { DrinkersMonthComponent } from './drinkers-month/drinkers-month.component';
import { ModBarsComponent } from './mod-bars/mod-bars.component';
import { ModDrinkersComponent } from './mod-drinkers/mod-drinkers.component';
import { ModCityComponent } from './mod-city/mod-city.component';
import { ModFreqComponent } from './mod-freq/mod-freq.component';
import { ModIncludeComponent } from './mod-include/mod-include.component';
import { ModItemComponent } from './mod-item/mod-item.component';
import { ModLikeComponent } from './mod-like/mod-like.component';
import { ModLocComponent } from './mod-loc/mod-loc.component';
import { ModMkComponent } from './mod-mk/mod-mk.component';
import { ModSellsComponent } from './mod-sells/mod-sells.component';
import { ModTransComponent } from './mod-trans/mod-trans.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { HomeComponent } from './home/home.component';
import { SqlPageComponent } from './sql-page/sql-page.component';
import { ResPageComponent } from './res-page/res-page.component';
//import {ToastModule} from 'primeng/toast';
//import {ToastModule} from 'ng2-toastr/ng2-toastr'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BarDetailsComponent,
    BeerDetailsComponent,
    BeersComponent,
    InsightComponent,
    TransactionComponent,
    DrinkerDetailsComponent,
    BeersBarsComponent,
    BeersStatsComponent,
    BeersDrinkersComponent,
    BeersSellRecordComponent,
    DrinkersComponent,
    DrinkersBarsComponent,
    DrinkersTimeComponent,
    DrinkersBeersComponent,
    DrinkersTransComponent,
    BarsDrinkersComponent,
    BarsBeersComponent,
    BarsManufsComponent,
    ModificationComponent,
    DrinkersbarDetailsComponent,
    DrinkersbarlistComponent,
    BarsSellWeekdayComponent,
    BarsSellHourComponent,
    DrinkersWeekComponent,
    DrinkersMonthComponent,
    ModBarsComponent,
    ModDrinkersComponent,
    ModCityComponent,
    ModFreqComponent,
    ModIncludeComponent,
    ModItemComponent,
    ModLikeComponent,
    ModLocComponent,
    ModMkComponent,
    ModSellsComponent,
    ModTransComponent,
    HomeComponent,
    SqlPageComponent,
    ResPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    TableModule,
    AppRoutingModule,
    MessageModule,
    MessagesModule,
    //ToastModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }