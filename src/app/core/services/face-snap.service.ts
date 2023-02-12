import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: "root"
})
export class FaceSnapService {
  api: string = "http://localhost:3000";

  private snappedIds: number[] = []

  constructor(private http: HttpClient) { }

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>(`${this.api}/facesnaps`);
  }

  snapById(id: number, snapped: boolean): Observable<FaceSnap> {
    return this.getFaceSnapById(id).pipe(
      map((faceSnap: FaceSnap) => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapped ? - 1 : 1)
      })),
      switchMap((faceSnap: FaceSnap) => this.http.put<FaceSnap>(`${this.api}/facesnaps/${id}`, faceSnap)),
      tap(() => {
        if (snapped)
          this.snappedIds = this.snappedIds.filter(spappedId => spappedId !== id);
        else
          this.snappedIds.push(id);
      })
    )
  }

  getSnappedFaces(): Observable<FaceSnap[]> {
    return this.getAllFaceSnaps().pipe(
      map(faceSnaps => faceSnaps.filter(faceSnap => this.snappedIds.includes(faceSnap.id)))
    );
  }

  isSnapped(id: number): boolean {
    return this.snappedIds.includes(id);
  }

  getFaceSnapById(id: number) {
    return this.http.get<FaceSnap>(`${this.api}/facesnaps/${id}`)
  }

  addFaceSnap(formValue: { title: string, description: string, imageSrc: string, location?: string }): Observable<FaceSnap> {
    // dans le tuto, pour obtenir le bon id, Will a utilisé la méthode (plus longue) avec [...faceSnaps].sort((a, b) => a.id - b.id)
    return this.getAllFaceSnaps().pipe(
      switchMap((faceSnaps: FaceSnap[]) => this.http.post<FaceSnap>(`${this.api}/facesnaps`, {
        ...formValue,
        createdAt: new Date(),
        snaps: 0,
        id: faceSnaps.reduce((id, snap) => id > snap.id ? id : snap.id + 1, 1)
      }))
    )
  }
}
/*
Les méthodes  put()  et  post()  de HttpClient prennent l'URL de la requête comme premier argument, et le corps à envoyer comme deuxième argument ;

Je crée une requête composée lorsque la réponse d'une requête est utilisée pour en créer une autre ;

Attention à l'asynchrone ! Si une action doit être effectuée après une requête, j'utilise des opérateurs comme  tap()  dans le  pipe  de la requête ;

Quand une méthode de service génère une requête, le best practice est de retourner l'Observable et d'y souscrire depuis le component.
*/
