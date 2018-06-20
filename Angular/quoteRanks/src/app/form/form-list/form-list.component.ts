import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  @Input() quotes;
  constructor() { }

  ngOnInit() {
  }

}
