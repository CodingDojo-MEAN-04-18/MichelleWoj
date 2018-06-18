import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [];
  user = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordconfirm: '',
    address: '',
    address2: '',
    city: ''
  };
  // user: User = new User();
  // users: User[] = [];
  // difining type of array and clarifying that it's empty;
  onSubmit() {
    event.preventDefault();
    console.log('submitting form', this.user);
    // console.log('onSubmit()');
    // console.log(this.user);
    this.users.push(this.user);
    console.log('users', this.users);
    this.user = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordconfirm: '',
      address: '',
      address2: '',
      city: ''
    };
  }
}
