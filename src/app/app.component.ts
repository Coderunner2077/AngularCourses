import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myFinalSnap!: FaceSnap;

  ngOnInit() {
    /* // instanciations quand on utilisait le constructeur dans la classe FaceSnap:
    this.mySnap = new FaceSnap("Archibald", "Mon meilleur ami depuis tout petit !", new Date(), 6, "https://img.freepik.com/free-vector/cute-brown-sitting-with-hat-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-5347.jpg?w=2000");
    this.myOtherSnap = new FaceSnap("Mon petit cheval", "Mon meilleur cheval depuis tout petit !", new Date(), 12, "https://img.freepik.com/photos-gratuite/beau-cheval-licorne-dans-nature_23-2149399916.jpg?w=2000");
    this.myFinalSnap = new FaceSnap("Petit Castor", "Le plus beau castor dans les parages !", new Date(), 8, "https://www.grand-parc.fr/image/visuel/affut-au-castor-mobile.jpg");
    */
    this.mySnap = {
      title: "Archibald",
      description: "Mon meilleur ami depuis tout petit !",
      createdAt: new Date(),
      snaps: 6,
      imageSrc: "https://img.freepik.com/free-vector/cute-brown-sitting-with-hat-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-5347.jpg?w=2000",
      location: "Paris"
    }
    this.myOtherSnap = {
      title: "Mon petit cheval",
      description: "Mon meilleur cheval depuis tout petit !",
      createdAt: new Date(),
      snaps: 12,
      imageSrc: "https://img.freepik.com/photos-gratuite/beau-cheval-licorne-dans-nature_23-2149399916.jpg?w=2000",
      location: "Marseille"
    }

    this.myFinalSnap = {
      title: "Petit Castor",
      description: "Le plus beau castor dans les parages !",
      createdAt: new Date(),
      snaps: 8,
      imageSrc: "https://www.grand-parc.fr/image/visuel/affut-au-castor-mobile.jpg"
    }
  }
}
