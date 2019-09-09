import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgbDateStruct, NgbCalendar, NgbDate, NgbDatepickerNavigateEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  @Output() selected = new EventEmitter();

  private enabledDates = [1,2,3];
  pickerMaxDate: NgbDateStruct;
  isDayDisabled = (date: NgbDate, current: {month: number}) => this.enabledDates.indexOf(2) === -1;

  constructor(private calendar: NgbCalendar) { 
    this.pickerMaxDate = calendar.getPrev(calendar.getToday(), 'd', 1);
  }

  onDateSelected(theDate: NgbDate) {
    const dateParam = [theDate.year, ('0' + theDate.month).slice(-2), ('0' + theDate.day).slice(-2)].join('-');
    this.selected.emit(dateParam);
  }

  onNavigate(navigationEvent: NgbDatepickerNavigateEvent) {
    console.log(navigationEvent);
  }

  ngOnInit() {
  }

}