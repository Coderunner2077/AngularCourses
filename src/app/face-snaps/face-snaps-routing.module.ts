import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapListComponent } from "./components/face-snap-list/face-snap-list.component";
import { NewFaceSnapComponent } from "./components/new-face-snap/new-face-snap.component";
import { SingleFaceSnapComponent } from "./components/single-face-snap/single-face-snap.component";
import { AuthGuard } from "../core/guards/auth.guard";

const routes: Routes = [
  { path: "create", component: NewFaceSnapComponent, canActivate: [AuthGuard]}, // attention: à placer avant la route :id car sinon le router va confondre les deux
  { path: ":id", component: SingleFaceSnapComponent, canActivate: [AuthGuard]},
  { path: "", component: FaceSnapListComponent, canActivate: [AuthGuard] },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FaceSnapsRoutingModule {

}

/*
Le lazy loading génère un fichier JS séparé, pour un module qui n'est chargé que si l'utilisateur visite la route correspondante ;

Pour implémenter le lazy loading, le module en question doit s'occuper de tout son routing ;

Le routing est ensuite délégué par le routeur principal avec une syntaxe particulière :

{ path: 'module-route', loadChildren: () => import('path/to/module').then(m => m.NameOfModule) }

*/
