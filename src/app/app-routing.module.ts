import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongListComponent } from './song/song-list/song-list.component';
import { SongViewComponent } from './song/song-view/song-view.component';

const routes: Routes = [
  { path: 'songs', component: SongListComponent },
  { path: 'songs/:id', component: SongViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
