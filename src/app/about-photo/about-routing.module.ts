import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPhotoComponent } from './about-photo.component';
const routes: Routes = [
  {
    path: '',
    component: AboutPhotoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutPhotoRoutingModule {}
