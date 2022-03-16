import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  picture: {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }[] = [];
  id: number = +this.route.snapshot.params['id'];
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      return this.id;
    });

    fetch(`https://jsonplaceholder.typicode.com/albums/${this.id}/photos`)
      .then((response) => response.json())
      .then((response) => {
        this.picture = response;
      });
  }
  goToPicInfo(id: number) {
    this.router.navigate(['/users', id, 'albums', 'aboutpicture'], {
      relativeTo: this.route,
    });
  }
}
