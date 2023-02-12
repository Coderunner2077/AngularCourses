import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FaceSnapsModule } from '../face-snaps/face-snaps.module';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FaceSnapsModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingPageModule { }

/*
Il y a trois types principaux de modules :

* feature modules – regroupent les éléments d'un feature de l'application ;

* core modules – regroupent les éléments qui sont importés une seule fois dans l'application ;

* shared modules – regroupent les éléments qui sont importés à plusieurs endroits de l'application.

Un module doit importer tout ce dont il a besoin pour générer ses enfants. Par exemple, si un component qu'il déclare contient un formulaire réactif, il devra importer ReactiveFormsModule ;

Si un component déclaré par un module enfant est utilisé dans un module parent, le module enfant doit exporter ce component.

*/
