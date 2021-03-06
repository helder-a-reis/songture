import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SongService } from 'src/app/services/song.service';
import { Song } from '../song.model';

@Component({
  selector: 'app-song-view',
  templateUrl: './song-view.component.html',
  styleUrls: ['./song-view.component.css']
})
export class SongViewComponent implements OnInit {
  public song: Song | undefined;
  
  constructor(private _songService: SongService, private _route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      if (params['id']) {
        this.song = this._songService.getSong(params['id']);
      }
    })
  }

}
