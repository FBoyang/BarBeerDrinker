import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarsService, Bar, BarMenuItem,trans_msg } from '../bars.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.css']
})
export class BarDetailsComponent implements OnInit {

  barName: string;
  barDetails: Bar;
  menu: BarMenuItem[];

  resp:trans_msg;

  drinkerNameValue = "Derpy Derpson"
  transIDValue = "1000" 
  tipsValue = "0.0"
  dateValue= "1/1/2018"
  timeValue= "00:00"


  constructor(
    private barService: BarsService,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe((paramMap) => {
      this.barName = paramMap.get('bar');

      barService.getBar(this.barName).subscribe(
        data => {
          this.barDetails = data;
        },
        (error: HttpResponse<any>) => {
          if (error.status === 404) {
            alert('Bar not found');
          } else {
            console.error(error.status + ' - ' + error.body);
            alert('An error occurred on the server. Please check the browser console.');
          }
        }
      );

      barService.getMenu(this.barName).subscribe(
        data => {
          this.menu = data;
        }
      );
    });
  }

  ngOnInit() {
  }
  makeTrans(drinkerNameValue:string,
    transIDValue:string,
    tipsValue:string,
    dateValue:string,
    timeValue:string){


    this.barService
    .make_trans(this.barName,
      drinkerNameValue,
      transIDValue,
      tipsValue,
      dateValue,
      timeValue)
    .subscribe(
      data => {
        this.resp = data
        console.log(this.resp.msg.toString())
        if (this.resp.msg.toString() ==  "Success"){
          alert( 'Success!');
        }else{
          alert( this.resp.msg.toString());
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
