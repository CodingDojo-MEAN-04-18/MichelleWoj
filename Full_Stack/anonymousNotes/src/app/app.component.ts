import { Component } from '@angular/core';
import { NoteService } from './note.service';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   notes = [
//     new Note(1, 'hello')
  // ];
  // constructor(private _noteService: NoteService) {
  //   this._noteService.updateNotes(this.newNote);
  //   this._noteService.notesAvailable.subscribe((notes) => {
  //     this.notes = notes;
  //   });
  // }
}
