import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatCalendar } from '@angular/material';
import { Moment } from 'moment';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit  {

  @ViewChild('calendar') calendar: MatCalendar<Moment>;

  selectedDate: Moment;

  name = 'Angular';

  constructor(private router: Router) { }

  onDateChanged(date) {
    const dateParam = [date.getFullYear(),('0' + (date.getMonth()+1)).slice(-2),('0' + date.getDate()).slice(-2)].join('-');
    this.router.navigate(['/reports',dateParam]);
  }

  ngAfterViewInit() {
  }
}
