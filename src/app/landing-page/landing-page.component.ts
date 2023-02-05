import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  snappedFaces!: FaceSnap[];

  constructor(private faceSnapService: FaceSnapService) { }

  ngOnInit(): void {
    this.snappedFaces = this.faceSnapService.getSnappedFaces();
  }
}
