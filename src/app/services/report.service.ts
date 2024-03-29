import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ReportService {

  constructor(private http: HttpClient) { }

  getReportsForDate(date){
    const params = new HttpParams()
    .set('date', date);

    return this.http.get("https://localhost/", {params});
  }

  getReportsForPeriod(period){
    const params = new HttpParams()
    .set('date', period);

    return this.http.get("https://localhost/", {params});
  }

  getReport(date,file){
    const params = new HttpParams()
    .set('date', date)
    .set('file', file);

    return this.http.get("https://localhost/", {params});
  }

}