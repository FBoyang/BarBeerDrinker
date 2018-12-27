import { Component, OnInit } from '@angular/core';
import {ModservService, Derp} from "../modserv.service"
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})


export class ModificationComponent implements OnInit {

  derp: Derp
  lname:string
  fname:string

  
  /*
  textValue = 'initial value';
  log = '';

  logText(value: string): void {
    this.log += `Text changed to '${value}'\n`;
  }
*/

  //barValue = 'initial value';
  barValue = 'initial value';
  drinkerValue = 'initial value';
  itemValue = 'initial value';
  likeValue = 'initial value';
  includeValue = 'initial value';
  makeValue = 'initial value';
  transcationValue = 'initial value';

  constructor(
    private modservService :ModservService,
    private route: ActivatedRoute
  ) { 

    

    this.fname = 'derp';
    
  
  }

  barLogText(value: string) : void{


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
  
  }
  
  ngOnInit() {
  }

 
}
