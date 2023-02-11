import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  urlPattern!: RegExp;

  constructor(private formBuilder: FormBuilder, private faceSnapService: FaceSnapService, private router: Router) { }

  ngOnInit(): void {
    this.urlPattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    this.snapForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageSrc: [null, [Validators.required, Validators.pattern(this.urlPattern)]],
      location: [null]
    }, {
      updateOn: "blur"
    }
    );
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdAt: new Date(),
        snaps: 0,
        id: 0
      }))
    );
  }

  onSubmitForm() {
    this.faceSnapService.addFaceSnap(this.snapForm.value);
    console.log(this.snapForm.value);
    this.router.navigateByUrl("/facesnaps")
  }

}
