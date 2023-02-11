import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: "root"
})
export class FaceSnapService {
  private faceSnaps: FaceSnap[] = [];
  //private faceSnaps$!: Observable<FaceSnap[]>;
  api: string = "http://localhost:3000";

  private snappedIds: number[] = []

  constructor(private http: HttpClient) { }

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>(`${this.api}/facesnaps`);
  }

  snapById(id: number, snapped: boolean): void {
    const faceSnap = this.faceSnaps.find((snap) => snap.id === id);
    if (!faceSnap) throw new Error("FaceSnap not found");
    if (snapped) {
      faceSnap.snaps--;
      this.snappedIds = this.snappedIds.filter(spappedId => spappedId !== id);
    }
    else {
      faceSnap.snaps++;
      this.snappedIds.push(id);
    }
  }

  getSnappedFaces(): FaceSnap[] {
    return this.faceSnaps.filter(faceSnap => this.snappedIds.includes(faceSnap.id));
  }

  isSnapped(id: number): boolean {
    return this.snappedIds.includes(id);
  }

  getFaceSnapById(id: number) {
    return this.http.get<FaceSnap>(`${this.api}/facesnaps/${id}`)
  }

  addFaceSnap(formValue: { title: string, description: string, imageSrc: string, location?: string }): void {
    this.faceSnaps.unshift({
      ...formValue,
      createdAt: new Date(),
      snaps: 0,
      id: this.faceSnaps.reduce((id, snap) => id > snap.id ? id : snap.id + 1, 1)
    })

  }
}
