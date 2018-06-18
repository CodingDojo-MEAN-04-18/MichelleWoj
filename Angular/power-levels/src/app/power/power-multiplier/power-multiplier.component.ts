import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-power-multiplier',
  templateUrl: './power-multiplier.component.html',
  styleUrls: ['./power-multiplier.component.css']
})
export class PowerMultiplierComponent {
  @Input() myPower: number;
  @Input() multiplier: number;
  @Input() title: string;
  constructor() { }

}
