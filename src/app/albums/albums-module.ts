import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { AlbumsRoutingModule } from './albums-router.module';
@NgModule({
  imports: [CommonModule, AlbumsRoutingModule],
  declarations: [AlbumsComponent],
})
export class AlbumsModule {}
