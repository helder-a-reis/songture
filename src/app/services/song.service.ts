import { Injectable } from '@angular/core';
import { SectionName } from '../song/section.model';
import { Song } from '../song/song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private _songs: Song[] = [
    { id: 1, title: 'Vondelpark', by: 'Helder Reis', bpm: 128, key: 'Gm', structure: [
      { name: SectionName.Intro, phrases: [
        { id: 1, chords: ['Dm', 'Gm'] }
      ]},
      { name: SectionName.Verse, phrases: [
        { id: 1, chords: ['Dm', 'Gm', 'A', 'Dm'] }
      ]}
    ] }, 
    { id: 2, title: 'Comfortably Numb', by: 'Pink Floyd' }
  ];
  
  constructor() { }
  
  public getAllSongs(): Song[] {
    return this._songs;
  }

  public getSong(id: number): Song | undefined {
    return this._songs.find(s => s.id == id);
  }

  public saveSong(song: Song) {
    if (!song.id) {
      // new song
      const maxId = this._songs.map(s => s.id).sort()[(this._songs.length-1)];
      song.id = maxId + 1;
      this._songs.push(song);
    } else {
      // update existing one
      const idx = this._songs.findIndex(s => s.id == song.id);
      this._songs.splice(idx, 1, song);
    }
    
  }
}
