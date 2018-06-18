import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  user = {
    powerLevel: ''
  };
  submitUser = {
    powerLevel: ''
  };
  onSubmit() {
    event.preventDefault();
    console.log('submitting form', this.user);
    this.submitUser.powerLevel = this.user.powerLevel;
  }
  constructor() { }

  ngOnInit() {
  }

}
