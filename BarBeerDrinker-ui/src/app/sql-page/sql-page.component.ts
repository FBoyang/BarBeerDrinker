import { Component, OnInit } from '@angular/core';
import { ModservService, accept } from '../modserv.service';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-sql-page',
  templateUrl: './sql-page.component.html',
  styleUrls: ['./sql-page.component.css']
})
export class SqlPageComponent implements OnInit {

  datas : any[]
  resp : accept;

  resstr:string;
  inputQuery = "select * from Bar"
  constructor( 
    private modservService: ModservService,
    private route: ActivatedRoute,
  
  ) { }

  ngOnInit() {
  }

  exe_sql_j(qry: string){
    console.log(qry)
    this.modservService
    .make_qry_j(qry)
    .subscribe(
      data => {
        this.datas = data
        //this.resstr = this.datas.accept.toString();
        this.resstr = JSON.stringify(this.datas, null, 2)
        document.getElementById("json").innerHTML = this.resstr
        console.log(this.resstr);

        
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
