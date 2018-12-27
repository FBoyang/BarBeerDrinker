import { Component, OnInit } from '@angular/core';
import { ModservService } from '../modserv.service';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-mod-freq',
  templateUrl: './mod-freq.component.html',
  styleUrls: ['./mod-freq.component.css']
})
export class ModFreqComponent implements OnInit {

  datas : any[]
  inputQuery = "insert into Bar(Name, Open_Time, Close_Time) values('barname', '9:00', '23:00')"
 
  constructor( 
    private modservService: ModservService,
    private route: ActivatedRoute,
   
    ) { 

      //TODO: get city info
      this.modservService.get_freq().subscribe(
        data => {
          this.datas= data;
  
          console.log(data)
        }
      )

    }

  ngOnInit() {
  }

  resp :any;
  accpet: boolean;
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
