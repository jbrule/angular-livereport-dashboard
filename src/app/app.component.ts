import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  name = 'Angular';

  constructor(private router: Router) { }

  onDateSelected($event){
    this.router.navigate(['/reports', $event]);
  }

  ngAfterViewInit() {
  }
}
