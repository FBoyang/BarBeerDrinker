import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Bar{
  BarName: string;
  Times: number;
}

export interface Drinker{
  DrinkerName: string;
  Times: string;
}

export interface sellRecord{
  "Amount": number,
  "Date": String
}

@Injectable({
  providedIn: 'root'
})
export class BeersStatsServService {

  constructor(public http: HttpClient) { }

  beer_frequent_bar(beer: string) {
    return this.http.get<Bar[]>('/api/beer/' + beer +'/topBars');
  }

  beer_frequent_drinker(beer: string) {
    return this.http.get<Drinker[]>('/api/beer/' + beer +'/topDrinkers');
  }

  beer_sell_record(beer : string){
    return this.http.get<sellRecord[]>('/api/beer/' + beer +'/sellRecord');
  }
}
