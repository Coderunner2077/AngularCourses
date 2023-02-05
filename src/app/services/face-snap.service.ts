import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: "root"
})
export class FaceSnapService {
  faceSnaps: FaceSnap[] = [
    {
      title: "Archibald",
      description: "Mon meilleur ami depuis tout petit !",
      createdAt: new Date(),
      snaps: 0,
      imageSrc: "https://img.freepik.com/free-vector/cute-brown-sitting-with-hat-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-5347.jpg?w=2000",
      location: "Paris"
    },
    {
      title: "Mon petit cheval",
      description: "Mon meilleur cheval depuis tout petit !",
      createdAt: new Date(),
      snaps: 12,
      imageSrc: "https://img.freepik.com/photos-gratuite/beau-cheval-licorne-dans-nature_23-2149399916.jpg?w=2000",
      location: "Marseille"
    },
    {
      title: "Petit Castor",
      description: "Le plus beau castor dans les parages !",
      createdAt: new Date(),
      snaps: 8,
      imageSrc: "https://www.grand-parc.fr/image/visuel/affut-au-castor-mobile.jpg"
    },
    {
      title: "Mon petit cheval",
      description: "Mon meilleur cheval depuis tout petit !",
      createdAt: new Date(),
      snaps: 12,
      imageSrc: "https://img.freepik.com/photos-gratuite/beau-cheval-licorne-dans-nature_23-2149399916.jpg?w=2000",
      location: "Marseille"
    }
  ]
}
