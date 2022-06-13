import { Injectable } from '@angular/core';
import { Song } from '../song/song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private _songs: Song[] = [{ id: 1, title: 'Vondelpark', by: 'Helder Reis', bpm: 128 }, { id: 2, title: 'Comfortably Numb', by: 'Pink Floyd' }];
  

  
  constructor() { }
  
  public getAllSongs(): Song[] {
    return this._songs;
  }

  public getSong(id: number): Song | undefined {
    return this._songs.find(s => s.id == id);
  }

}
