import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  quotes = [];
  quote = {
    text: '',
    author: ''
  };
  // submitQuote = {
  //   text: '',
  //   author: ''
  // };
  onSubmit() {
    event.preventDefault();
    this.quotes.push(this.quote);
    console.log(this.quotes);
    this.quote = {
      text: '',
      author: ''
    };
  }
  constructor() { }
  ngOnInit() {
  }
}
