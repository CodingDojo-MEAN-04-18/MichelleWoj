import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time = new Date();
  lastTimeZoneSelected = null;

  onButtonClick(timezone) {
    this.time = new Date();
    if (timezone === 'CST') {
      this.time.setHours(this.time.getHours() - 1);
    } else if (timezone === 'MST') {
      this.time.setHours(this.time.getHours() - 2);
    } else if (timezone === 'PST') {
      this.time.setHours(this.time.getHours() - 3);
    } else if (timezone === 'clear') {
      console.log(`Click event is working, timezone:`, timezone);
    }
    this.lastTimeZoneSelected = timezone;
  }
}
