import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from './../services/report.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reportDate: Date;
  report;
  reportFile: String;

  constructor(private route: ActivatedRoute, private reportService: ReportService) { }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
      this.reportDate = new Date(params.get('reportDate')+'T00:00');
      this.reportFile = params.get('reportFile');

      const dateString = [this.reportDate.getFullYear(),("0"+(this.reportDate.getMonth()+1)).slice(-2),("0"+this.reportDate.getDate()).slice(-2)].join('/');

      this.reportService.getReport(dateString,this.reportFile).subscribe( resp => {
        this.report = resp;
      });
    });
  }

}