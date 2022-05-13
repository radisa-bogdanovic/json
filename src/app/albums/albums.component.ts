import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PictureService } from '../about-photo/picture-service';
import { Picture } from '../models/picture-model';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  pictures: Picture[] = [];
  id: number = +this.route.snapshot.params['id'];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private services: PictureService
  ) {}

  ngOnInit(): void {
    this.getPicture();
    this.route.params.subscribe((params: Params) => {
      this.route.params.subscribe((params: Params) => {
        return this.services.getPhoto(params['id']);
      });
    });
  }
  getPicture() {
    this.services.getPhoto(this.id).subscribe((data: Picture[]) => {
      this.pictures = data.filter((data: Picture) => {
        return data.albumId == this.id;
      });
    });
  }
  goToPicInfo(id: number) {
    this.router.navigate(['/users', id, 'albums', 'aboutpicture'], {
      relativeTo: this.route,
    });
  }
}
