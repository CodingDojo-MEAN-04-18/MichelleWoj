import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails = [
    {email: 'michelle@email.com', important: true, subject: 'Looking for a job', content: 'Im looking for a job'},
    {email: 'alex@email.com', important: true, subject: 'working', content: 'shhh im working'},
    {email: 'joan@email.com', important: false, subject: 'need help', content: 'i need help'},
    {email: 'ed@email.com', important: false, subject: 'squeaky door', content: 'can you please fix the broken door'}
  ];
  myColor = 'red';
}
