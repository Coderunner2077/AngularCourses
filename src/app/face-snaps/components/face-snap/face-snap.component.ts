import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapped!: boolean;

  constructor(private faceSnapService: FaceSnapService, private router: Router) { }

  ngOnInit(): void {
    this.snapped = this.faceSnapService.isSnapped(this.faceSnap.id);
  }

  onViewSnap(): void {
    this.router.navigateByUrl(`/facesnaps/${this.faceSnap.id}`);
  }
}
