import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export interface Derp{
  sent: String
}

export interface accept{
  accept: String
}



@Injectable({
  providedIn: 'root'
})
export class ModservService {

  
  constructor(public http: HttpClient) { 
    
  }

  get_drinkers(){
    return this.http.get<any[]>('/api/drinker');
 }

 post_hello(test:string){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  
  return this.http.post<Derp>('/api/mod',{
      key: test
  },httpOptions);
}

make_qry(qry:string){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  
  return this.http.post<accept>('/api/mod/exeqry', {query: qry} ,httpOptions);
}

make_qry_j(qry:string){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  
  return this.http.post<any[]>('/api/mod/exeqryj', {query: qry} ,httpOptions);
}

get_city(){
  return this.http.get<any[]>('/api/city');
}

get_freq(){
  return this.http.get<any[]>('/api/freq');
}

get_include(){
  return this.http.get<any[]>('/api/include');
}

get_like(){
  return this.http.get<any[]>('/api/likes');
}

get_loc(){
  return this.http.get<any[]>('/api/locate');
}
get_make(){
  return this.http.get<any[]>('/api/make');
}
get_sell(){
  return this.http.get<any[]>('/api/sells');
}
get_trans(){
  return this.http.get<any[]>('/api/trans');
}


}
