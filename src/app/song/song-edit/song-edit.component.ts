import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongService } from 'src/app/services/song.service';
import { Song } from '../song.model';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {
  public song: Song | undefined;
  
  constructor(private _songService: SongService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      if (params['id']) {
        if (params['id'] != 0) {
          this.song = this._songService.getSong(params['id']);  
        }
      }
    })
  }

}
