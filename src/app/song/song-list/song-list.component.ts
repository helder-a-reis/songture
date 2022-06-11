import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  public songs = [{title: 'Vondelpark', by: 'Helder Reis'}, {title: 'Comfortably Numb', by: 'Pink Floyd'}];
  constructor() { }

  ngOnInit(): void {
  }

}
