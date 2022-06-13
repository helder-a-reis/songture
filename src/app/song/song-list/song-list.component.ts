import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Song } from '../song.model';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  public songs: Song[];

  constructor(private _songService: SongService) { 
    this.songs = _songService.getAllSongs();
  }

  ngOnInit(): void {
  }

}
