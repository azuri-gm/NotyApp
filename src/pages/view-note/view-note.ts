import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';

@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {
  note: Note;

  constructor(public navCtrl: NavController, public navParams: NavParams, private noteServiceProvider: NoteServiceProvider) {
    this.note = this.navParams.get('note');
  }

  deleteNote(createDate: number) {
    this.noteServiceProvider.deleteNote(createDate);
    this.navCtrl.pop();
  }

}
