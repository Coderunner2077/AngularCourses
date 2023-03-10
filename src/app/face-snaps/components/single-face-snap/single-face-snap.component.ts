import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  snapped!: boolean;
  faceSnap$!: Observable<FaceSnap | undefined>;
  notFound: boolean = false;

  constructor(private faceSnapService: FaceSnapService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    this.snapped = this.faceSnapService.isSnapped(id);
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(id).pipe(
      tap(snap => {
        if (!snap) this.notFound = true;
      })
    )
  }

  onFaceSnap(id: number): void {
    if (!this.faceSnap$) return;
    this.faceSnap$ = this.faceSnapService.snapById(id, this.snapped).pipe(
      // switchMap((faceSnap: FaceSnap) => this.faceSnapService.getFaceSnapById(id)), // pas besoin car la requête put renvoie le faceSnap modifié
      tap(() => {
        this.snapped = !this.snapped;
      })
    );
  }

}
