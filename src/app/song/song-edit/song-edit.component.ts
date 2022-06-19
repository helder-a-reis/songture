import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SongService } from 'src/app/services/song.service';
import { Song } from '../song.model';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { SectionName } from '../section.model';


@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {
  public song: Song;
  public songForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    by: new FormControl('',  [Validators.required]),
    bpm: new FormControl('')
  });
  public sections = SectionName;
  public sectionKeys = Object.keys(SectionName);
  public newSectionName: SectionName;
  
  constructor(private _songService: SongService, private _route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      if (params['id']) {
        // existing song
        if (params['id'] != 0) {
          this.song = this._songService.getSong(params['id']);  
          if (this.song) {
            this.songForm.setValue({
              title: this.song.title,
              by: this.song.by,
              bpm: this.song.bpm
            })
          }
        } else {
          this.song = {} as Song;
        }
      }
    });
  }

  public saveSong() {
    this.song.title = this.songForm.get('title').value;
    this.song.by = this.songForm.get('by').value;
    this.song.bpm = this.songForm.get('bpm').value;
    this._songService.saveSong(this.song);
  }
  
  public drop(event: any) {
    moveItemInArray(this.song.structure, event.previousIndex, event.currentIndex);
  }

  public addSection() {
    this.song.structure.push({ name: this.newSectionName, phrases: [] });
    this.newSectionName = undefined;
    console.log(this.song);
    
  }
}
