import { Injectable } from '@angular/core';
import { Note } from './note';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notesAvailable = new BehaviorSubject(null);
  // private base = '/api/notes';

  constructor(private _http: HttpClient) {
  }

  getNotes() {
    this._http.get('http://localhost:8000/api/notes').subscribe(
      (note: any[]) => { this.notesAvailable.next(note); }
    );
  }

  updateNotes(newNote: Note) {
    this._http.post('http://localhost:8000/api/notes', newNote).subscribe((response) => {
      this.getNotes();
    }
  );
  }
}

