import { Component, OnInit } from '@angular/core';
import { Moment } from 'moment';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from './../services/report.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  reportDate: Date;
  reports;

  constructor(private route: ActivatedRoute, private reportService: ReportService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.reportDate = new Date(params.get('reportDate')+'T00:00');

      const dateString = [this.reportDate.getFullYear(),("0"+(this.reportDate.getMonth()+1)).slice(-2),("0"+this.reportDate.getDate()).slice(-2)].join('/');

      this.reportService.getReportsForDate(dateString).subscribe( resp => {
        this.reports = resp;
      });
    });
  }
}