import { Component, OnInit } from '@angular/core';
import { Moment } from 'moment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  reportDate: Date;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.reportDate = new Date(params.get('reportDate')+'T00:00');
    });
  }

}