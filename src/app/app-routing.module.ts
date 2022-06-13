import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongEditComponent } from './song/song-edit/song-edit.component';
import { SongListComponent } from './song/song-list/song-list.component';
import { SongViewComponent } from './song/song-view/song-view.component';

const routes: Routes = [
  { path: 'songs', component: SongListComponent },
  { path: 'songs/:id', component: SongViewComponent },
  { path: 'songs/edit/:id', component: SongEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
