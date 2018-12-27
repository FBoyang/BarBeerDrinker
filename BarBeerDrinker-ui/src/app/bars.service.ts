import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export interface Bar {
  name: string;
  license: string;
  city: string;
  phone: string;
  addr: string;
}

export interface BarMenuItem {
  beer: string;
  manf: string;
  price: number;
  likes: number;
}

export interface Drinker{
  After_Tips: number
  Before_Tips: number
  DrinkerName: string
}
export interface Beer {
  name: string;
}

export interface Manuf {
  Amount: number
  manf : string
}
export interface Item {
  Amount : number
  Item : string
}

export interface trans_by_week {
  TransNum : string
  WeekDay : number
}

export interface trans_by_time{
  Hour : number
  TransNum : string

}

export interface trans_msg{
    msg : string
}
@Injectable({
  providedIn: 'root'
})
export class BarsService {

  constructor(
    public http: HttpClient
  ) { }

  getBars() {
    return this.http.get<Bar[]>('/api/bar');
  }

  getBar(bar: string) {
    return this.http.get<Bar>('/api/bar/' + bar);
  }

  getMenu(bar: string) {
    return this.http.get<BarMenuItem[]>('/api/menu/' + bar);
  }

  getFrequentCounts() {
    return this.http.get<any[]>('/api/frequents-data');
  }

  getTopDrinker(){
    return this.http.get<Drinker[]>('/api/topdrinker');
  }

  getTopBeer(){
    return this.http.get<Beer[]>('/api/topbeer');
  }
  
  getTopManuf(){
    return this.http.get<Beer[]>('/api/topmanuf');
  }
  bar_top_drinker(barName:string){
    return this.http.get<Drinker[]>('/api/bar/' + barName + '/topDrinkers');
  }

  bar_top_item(barName:string){
    return this.http.get<Item[]>('/api/bar/' + barName + '/topBeers');
  }

  bar_top_manf(barName:string){
    return this.http.get<Manuf[]>('/api/bar/' + barName + '/topManufacture');
  }

  bar_by_week(barName:string){
    return this.http.get<trans_by_week[]>('/api/bar/' + barName + '/byWeek');
  }

  bar_by_time(barName:string){
    return this.http.get<trans_by_time[]>('/api/bar/' + barName + '/byTime');
  }

  make_trans(barName:string,
    drinkerNameValue:string,
    transIDValue:string,
    tipsValue:string,
    dateValue:string,
    timeValue:string){

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };
      
    return this.http.post<trans_msg>('/api/bar/' + barName + '/maketrans',{
      "Bar" : barName,
      "Drinker" : drinkerNameValue,
    "TransID": transIDValue,
    "Tips":tipsValue,
    "Date":dateValue,
    "Time":timeValue
    },httpOptions);
  }
}
