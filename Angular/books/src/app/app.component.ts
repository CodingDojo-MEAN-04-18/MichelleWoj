import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  book = new Book();
  books: Array<Book> = [];


  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.book);
    this.books.push(this.book);
    this.book = new Book();
    form.reset();
    console.log('books', this.books);
  }
}
