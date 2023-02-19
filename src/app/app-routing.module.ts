import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page/components/landing-page/landing-page.component";

const routes: Routes = [
  { path: "facesnaps", loadChildren: () => import("./face-snaps/face-snaps.module").then(m => m.FaceSnapsModule) },
  //{ path: "login", component: LoginComponent },
  { path: "", component: LandingPageComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
