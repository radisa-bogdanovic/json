import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-about-photo',
  templateUrl: './about-photo.component.html',
  styleUrls: ['./about-photo.component.css'],
})
export class AboutPhotoComponent implements OnInit {
  aboutPic: {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }[] = [];
  id: number = +this.route.snapshot.params['id'];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      return this.id;
    });

    fetch(`https://jsonplaceholder.typicode.com/albums/${this.id}/photos`)
      .then((response) => response.json())
      .then((response) => {
        this.aboutPic = response;
      });
  }
}
