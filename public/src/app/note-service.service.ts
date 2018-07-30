import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NoteServiceService {

  constructor(private _http: Http) { }
  getAllNotes(){
    return this._http.get('/api/show').map(data => data.json()).toPromise();
    }

  addNote(note){
    return this._http.post('/api/create', note).map(data => data.json()).toPromise()
  }
  }
    