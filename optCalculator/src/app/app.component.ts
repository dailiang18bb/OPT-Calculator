import { Component } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import * as moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'optCalculator';

  graduationDate: any;
  gracePeriodMin: any;
  gracePeriodMax: any;
  minDate: any;
  maxDate: any;
  selectedDate: any;
  optStartDate: any;
  optEndDate: any;



  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    // this.events.push(`${type}: ${event.value}`);
    this.graduationDate = event.value;
    console.log(this.graduationDate);
    this.gracePeriodMin = moment(this.graduationDate).add(1, 'days');
    this.gracePeriodMax = moment(this.graduationDate).add(60, 'days');
    console.log(this.gracePeriodMin);
    console.log(this.gracePeriodMax.toDate());
    this.minDate = this.gracePeriodMin.toDate();
    this.maxDate = this.gracePeriodMax.toDate();
    this.optStartDate = "";
    
  }

  showSummary(type: string, event: MatDatepickerInputEvent<Date>) {
    this.optEndDate = moment(this.optStartDate).add(1, 'year');
  }
  
  // minDate = new Date(2019, 3, 18);
  // maxDate = new Date(this.gracePeriodMax.year(), this.gracePeriodMin.month(), this.gracePeriodMin.date());



  onSelect(event){
    console.log(event);
    this.selectedDate= event;

  }
}
