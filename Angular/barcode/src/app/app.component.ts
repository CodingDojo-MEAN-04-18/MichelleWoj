import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myArray = [];

  fillmyArray() {
    for (let x = 0; x < 10; x++) {
      const randNum = Math.floor(Math.random() * 3) + 1;
      if (randNum === 1) {
        this.myArray.push('BlueViolet');
      } else if (randNum === 2) {
        this.myArray.push('CornflowerBlue');
      } else if (randNum === 3) {
        this.myArray.push('DarkMagenta');
      } else if (randNum === 4) {
        this.myArray.push('DarkOrchid');
      }
    }
  }
  ngOnInit() {
    this.fillmyArray();
  }
}
