import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/model/song';
import { SongService } from 'src/app/services/song.service';

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
