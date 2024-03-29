import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportService } from './services/report.service';
import { ReportComponent } from './report/report.component';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  imports:      [
    CustomMaterialModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ChartsModule,
    RouterModule.forRoot([
      { path: '', component: HelloComponent },
      { path: 'reports/:reportDate', component: ReportListComponent },
      { path: 'reports/:reportDate/:reportFile', component: ReportComponent },
      ]), 
  ],
  declarations: [ AppComponent, HelloComponent, ReportListComponent, ReportComponent, ChartComponent, DatepickerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ReportService]
})
export class AppModule { }
