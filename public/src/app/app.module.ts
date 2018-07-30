import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoteServiceService } from './note-service.service';
import { FormsModule} from  '@angular/forms';
import { HttpModule} from  '@angular/http';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    

  ],
  providers: [
    NoteServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
