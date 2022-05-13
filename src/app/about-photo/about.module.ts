import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPhotoRoutingModule } from './about-routing.module';
import { AboutPhotoComponent } from './about-photo.component';
@NgModule({
  imports: [CommonModule, AboutPhotoRoutingModule],
  declarations: [AboutPhotoComponent],
})
export class AboutModule {}
