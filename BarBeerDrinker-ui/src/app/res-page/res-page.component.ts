import { Component, OnInit } from '@angular/core';
import { ModservService, accept } from '../modserv.service';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-res-page',
  templateUrl: './res-page.component.html',
  styleUrls: ['./res-page.component.css']
})
export class ResPageComponent implements OnInit {

  datas : any[]
  resp : accept;

  resstr:string;
  inputQuery2 = "select not exists(\
    select m.TransID, m.Time, b.Open_Time, b.Close_Time \
    from Make m, \
    (select Name, Open_Time, \
    (if (time(Close_Time) >= time(\"00:00\") and time(Close_Time) < time(\"08:00\"), addtime(Close_Time, \"24:00\"), (Close_Time))) as Close_Time \
    from Bar) as b \
    where \
    (if (time(m.Time) >= time(\"00:00\") and time(m.Time) < time(\"06:00\"), addtime(m.Time, \"24:00\"), (m.Time))) and \
    (time(m.Time) < time(b.Open_Time) or time(m.Time) >  time(b.Close_Time)) and \
    m.BarName = b.Name \
    )"
  inputQuery1 = "select not exist (select * from \
  (Make M left join Locate L on M.BarName = L.Bar)\
  left join Drinker D on D.Name = M.DrinkerName\
  where L.State <> D.State)"

  inputQuery3 = "select not exists(\
    select * from \
    (Sells S1 left join Item I1 on I1.Item = S1.Item) \
    left join (Sells S2 left join Item I2 on I2.Item = S2.Item)  on S1.Bar = S2.Bar \
    where S1.Price > S2.Price and \
    I1.Index < I2.Index)"
  constructor( 
    private modservService: ModservService,
    private route: ActivatedRoute,
  ){

  }
  ngOnInit() {
  }
  val(str:string){
    alert("return value :1")
  }
}
