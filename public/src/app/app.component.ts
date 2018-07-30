import { Component } from '@angular/core';
import { Note } from "./note";
import { NoteServiceService } from './note-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  note = new Note();
  content = ""
  notes;
  noteExists = false;


  constructor(private _noteService: NoteServiceService){}
  
  createNote(){
    if(this.content){
      this.noteExists == true;
    }
    this._noteService.addNote(this.note).then(response => console.log(response)).catch(err => console.log(err))
    this.getNotes();
    console.log(this.note);
    this.note = new Note();
  }
  getNotes(){
    this._noteService.getAllNotes().then(notes => this.notes = notes).catch(err => console.log(err))
  }

}
