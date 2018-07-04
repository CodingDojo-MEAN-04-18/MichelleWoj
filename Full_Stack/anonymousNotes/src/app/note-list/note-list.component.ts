import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from './../note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Array<Note> = [];

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
    this._noteService.notesAvailable.subscribe((notes) => {
      this.notes = notes;
    });
    this._noteService.getNotes();
  }
}
