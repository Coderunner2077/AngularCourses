import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  snappedFaces!: FaceSnap[];

  constructor(private faceSnapService: FaceSnapService, private router: Router) { }

  ngOnInit(): void {
    this.snappedFaces = this.faceSnapService.getSnappedFaces();
  }

  onContinue(): void {
    this.router.navigateByUrl("facesnaps"); // or this.router.navigate(["/facesnaps"]);
  }
}
