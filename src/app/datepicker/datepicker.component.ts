import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgbDateStruct, NgbCalendar, NgbDate, NgbDatepickerNavigateEvent} from '@ng-bootstrap/ng-bootstrap';
import { ReportService } from './../services/report.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  @Output() selected = new EventEmitter();

  private enabledDates = [1,2,3];
  maxDate: NgbDateStruct;
  markDisabled;

  constructor(private calendar: NgbCalendar, private reportService: ReportService) { 
    this.maxDate = calendar.getPrev(calendar.getToday(), 'd', 1);
  }

  onDateSelected(theDate: NgbDate) {
    const dateParam = [theDate.year, ('0' + theDate.month).slice(-2), ('0' + theDate.day).slice(-2)].join('-');
    this.selected.emit(dateParam);
  }

  onNavigate(navigationEvent: NgbDatepickerNavigateEvent) {
    console.log(navigationEvent);
    const month = ("0"+(navigationEvent.next.month)).slice(-2);
    const period = navigationEvent.next.year + '/' + month;
    this.reportService.getReportsForPeriod(period).subscribe( resp => {
      this.markDisabled = (date: NgbDate) => {
        return resp.indexOf(date.day) === -1;
      };    
    });
  }

  ngOnInit() {
  }

}