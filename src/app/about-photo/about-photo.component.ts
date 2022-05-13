import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PictureService } from './picture-service';
import { Picture } from '../models/picture-model';
import { Params } from '@angular/router';
@Component({
  selector: 'app-about-photo',
  templateUrl: './about-photo.component.html',
  styleUrls: ['./about-photo.component.css'],
})
export class AboutPhotoComponent implements OnInit {
  aboutPic: Picture[] = [];
  id: number = +this.route.snapshot.params['id'];
  constructor(private route: ActivatedRoute, private service: PictureService) {}

  ngOnInit(): void {
    this.getPhoto();
    this.route.params.subscribe((params: Params) => {
      return this.service.getPhoto(params['id']);
    });
  }
  getPhoto() {
    this.service.getPhoto(this.id).subscribe((data: Picture[]) => {
      this.aboutPic = data;
      return this.id;
    });
  }
}
