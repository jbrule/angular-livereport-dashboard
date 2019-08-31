import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReportListComponent } from './report-list/report-list.component';

@NgModule({
  imports:      [
    CustomMaterialModule,
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
      { path: '', component: HelloComponent },
      { path: 'reports/:reportDate', component: ReportListComponent },
      ]), 
  ],
  declarations: [ AppComponent, HelloComponent, ReportListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
