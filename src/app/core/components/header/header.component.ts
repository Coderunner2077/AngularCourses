import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // isAuthenticated$!: BehaviorSubject<boolean>;
  isAuthenticated!: boolean;
  constructor(private router: Router, private authService: AuthService) { }

  onAddNewFaceSnap(): void {
    this.router.navigateByUrl("/facesnaps/create");
  }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe(
      value => this.isAuthenticated = value
    )
    console.log("is authenticated in header: ", this.isAuthenticated);
    //this.isAuthenticated$ = this.authService.isAuthenticated();
  }
}
