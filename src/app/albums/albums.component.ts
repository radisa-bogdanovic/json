import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { picture } from '../models/picture-modul';
import { Services } from '../services';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  pictures: picture[] = [];
  id: number = +this.route.snapshot.params['id'];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private services: Services
  ) {}

  ngOnInit(): void {
    this.getPicture();
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      return this.id;
    });
  }
  getPicture() {
    this.services.getPhoto(this.id).subscribe((data: picture[]) => {
      this.pictures = data;
    });
  }
  goToPicInfo(id: number) {
    this.router.navigate(['/users', id, 'albums', 'aboutpicture'], {
      relativeTo: this.route,
    });
  }
}
