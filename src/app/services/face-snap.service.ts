import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: "root"
})
export class FaceSnapService {
  private faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: "Archibald",
      description: "Mon meilleur ami depuis tout petit !",
      createdAt: new Date(),
      snaps: 0,
      imageSrc: "https://img.freepik.com/free-vector/cute-brown-sitting-with-hat-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-5347.jpg?w=2000",
      location: "Paris"
    },
    {
      id: 2,
      title: "Mon petit cheval",
      description: "Mon meilleur cheval depuis tout petit !",
      createdAt: new Date(),
      snaps: 12,
      imageSrc: "https://img.freepik.com/photos-gratuite/beau-cheval-licorne-dans-nature_23-2149399916.jpg?w=2000",
      location: "Marseille"
    },
    {
      id: 3,
      title: "Petit Castor",
      description: "Le plus beau castor dans les parages !",
      createdAt: new Date(),
      snaps: 8,
      imageSrc: "https://www.grand-parc.fr/image/visuel/affut-au-castor-mobile.jpg"
    },
    {
      id: 4,
      title: "Mon petit cheval",
      description: "Mon meilleur cheval depuis tout petit !",
      createdAt: new Date(),
      snaps: 12,
      imageSrc: "https://img.freepik.com/photos-gratuite/beau-cheval-licorne-dans-nature_23-2149399916.jpg?w=2000",
      location: "Marseille"
    }
  ]

  private snappedIds: number[] = []

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
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
    return this.faceSnaps.find((snap) => snap.id === id);
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
