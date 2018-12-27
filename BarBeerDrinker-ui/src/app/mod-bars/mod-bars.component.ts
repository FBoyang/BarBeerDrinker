import { Component, OnInit } from '@angular/core';
import {ModservService} from '../modserv.service';
import {BarsService,Bar} from '../bars.service'
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-mod-bars',
  templateUrl: './mod-bars.component.html',
  styleUrls: ['./mod-bars.component.css']
})
export class ModBarsComponent implements OnInit {

  bars : any[]
  constructor(
    private barsService: BarsService,
    private modservService: ModservService,
    private route : ActivatedRoute,
    //private messageService : MessageService
  ) {

    this.barsService.getBars().subscribe(
      data => {
        this.bars= data;

        console.log(this.bars)
      }
    )
  }

  ngOnInit() {
  }

  
  insertBar(barName: string,openTime :string,closeTime: string) : boolean{


    console.log(barName,openTime,closeTime)
    /*
    this.modservService
    .post_hello(value)
    .subscribe(
      data => {
        this.derp = data
        console.log(this.derp);
      },
      (error: HttpResponse<any>) => {
        if (error.status === 404) {
          alert('Bar not found');
        } else {
          console.error(error.status + ' - ' + error.body);
          alert('An error occurred on the server. Please check the browser console.');
        }
      }
      
    )
      */

      return false;
  }

  delBar(barName: string) : boolean{
    console.log(barName)
    return false
  }

  updateBar(oldbarName: string,newbarName: string,openTime :string,closeTime: string) : boolean{
    console.log(oldbarName,newbarName,openTime,closeTime);
    return false;
  }

  resp :any;
  accpet: boolean;
  inputQuery = "insert into Bar(Name, Open_Time, Close_Time) values('barname', '9:00', '23:00')"
  exe_sql(qry: string){
    this.modservService
  
    .make_qry(qry)
    .subscribe(
      data => {
        this.resp = data
        console.log(this.resp.accept.toString())
        if (this.resp.accept.toString() ==  "Success"){
          alert( 'Success!');
        }else{
          alert( this.resp.accept.toString());
        }
        this.resp = null;
      },
      (error: HttpResponse<any>) => {
        if (error.status === 404) {
          alert('Bar not found');
        } else {
          console.error(error.status + ' - ' + error.body);
          alert('An error occurred on the server. Please check the browser console.');
        }
      }
    )
    
  }

}
