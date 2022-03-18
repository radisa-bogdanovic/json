import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { picture } from '../models/picture-modul';
import { Services } from '../services';

@Component({
  selector: 'app-about-photo',
  templateUrl: './about-photo.component.html',
  styleUrls: ['./about-photo.component.css'],
})
export class AboutPhotoComponent implements OnInit {
  aboutPic: picture[] = [];
  id: number = +this.route.snapshot.params['id'];
  constructor(private route: ActivatedRoute, private service: Services) {}

  ngOnInit(): void {
    this.getPhoto();
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      return this.id;
    });
  }
  getPhoto() {
    this.service.getPhoto(this.id).subscribe((data: picture[]) => {
      this.aboutPic = data;
      return this.id;
    });
  }
}
