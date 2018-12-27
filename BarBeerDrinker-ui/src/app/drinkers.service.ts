import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionComponent } from './transaction/transaction.component';

export interface Bar{ 
  BarName: string;
  Open_Time: string;
  Close_Time: string;
}

export interface Drinker{
  City: string;
  Name : string;
  state: string;
}

export interface Item{
  Item: string;
  Num: number;
}

export interface DrinkerBarSpent{
  BarName: string;
  Spent: number;
}

export interface DrinkerDateSpent{
  Date: String
  Spent: number
}

export interface DrinkerWeekSpent{
  Spent: string
  WeekDay: string
  
}

export interface DrinkerMonthSpent{
  Month: string
  Spent: string
}

export interface drinker_bar_trans{
  BarName: string
  Date: string
  Time: string
  TransID: number
}

export interface trans_detail{
  BarName: string
  Date: string,
  DrinkerName: string
  Item: string
  Price: number
  Quantity: number
  Time: string
}

@Injectable({
  providedIn: 'root'
})
export class DrinkersService {

  constructor(public http: HttpClient) { }

get_drinkers(){
    return this.http.get<Drinker[]>('/api/drinker');
 }

 drinker_to_bar(drinkerName:string){
   return this.http.get<Bar[]>('/api/drinker/' + drinkerName + '/bar');
 }

 drinker_to_item(drinkerName:string){
  return this.http.get<Item[]>('/api/drinker/'+drinkerName +'/topBeer');
 }
 drinker_bar_spent(drinkerName:string){
   return this.http.get<DrinkerBarSpent[]>('/api/drinker/' + drinkerName + '/bar');
 }
 
 drinker_date_spent(drinkerName:string){
   return this.http.get<DrinkerDateSpent[]>('/api/drinker/' + drinkerName + '/date');
 }

 drinker_week_spent(drinkerName:string){
  return this.http.get<DrinkerWeekSpent[]>('/api/drinker/' + drinkerName + '/byWeek');
}

drinker_month_spent(drinkerName:string){
  return this.http.get<DrinkerMonthSpent[]>('/api/drinker/' + drinkerName + '/byMonth');
}

  drinker_bar_trans(drinkerName:string,barName:string){
    return this.http.get<drinker_bar_trans[]>('/api/drinker/' + drinkerName + '/bar/' + barName);
  }
trans_detail(transid:string){
  return this.http.get<trans_detail[]>('/api/trans/'+transid);
}

}
