import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteService } from '../note.service';
import { Note } from './../note';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
  newNote: Note = new Note();
  notes: Array<Note>;

  constructor(
    private _noteService: NoteService) {
    this._noteService.notesAvailable.subscribe((notes) => {
      this.notes = notes;
    });
  }

  ngOnInit() {
    this.newNote = new Note();
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', form.value);
    this.notes.push(this.newNote);
      this._noteService.updateNotes(this.newNote);
      this.newNote = new Note();
  }
}
