import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  snappedFaces$!: Observable<FaceSnap[]>;
  userEmail!: string;

  constructor(private faceSnapService: FaceSnapService, private router: Router) { }

  ngOnInit(): void {
    this.snappedFaces$ = this.faceSnapService.getSnappedFaces();
    this.userEmail = "yo@yo.com"
  }

  onContinue(): void {
    this.router.navigateByUrl("facesnaps"); // or this.router.navigate(["/facesnaps"]);
  }

  onSubmitForm(form: NgForm) {
    console.log(this.userEmail);
    console.log("form: ", form.value);
  }
}
