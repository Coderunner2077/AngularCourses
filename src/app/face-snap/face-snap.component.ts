import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapped!: boolean;

  constructor(private faceSnapService: FaceSnapService) { }

  ngOnInit(): void {
    this.snapped = this.faceSnapService.isSnapped(this.faceSnap.id);
  }

  onFaceSnap(): void {
    this.faceSnapService.snapById(this.faceSnap.id, this.snapped);
    this.snapped = !this.snapped;
  }
}
