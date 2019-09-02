import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportService } from './services/report.service';
import { ReportComponent } from './report/report.component';

@NgModule({
  imports:      [
    CustomMaterialModule,
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot([
      { path: '', component: HelloComponent },
      { path: 'reports/:reportDate', component: ReportListComponent },
      { path: 'reports/:reportDate/:reportFile', component: ReportComponent },
      ]), 
  ],
  declarations: [ AppComponent, HelloComponent, ReportListComponent, ReportComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ReportService]
})
export class AppModule { }
