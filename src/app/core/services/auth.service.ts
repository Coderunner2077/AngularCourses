import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated$ = new BehaviorSubject<boolean>(false);
  private logged = false;
  private token = 'MyFakeToken';

  constructor() {}

  getToken(): string {
    return this.token;
  }

  login(): void {
    this.logged = true;
    this.authenticated$.next(true);
  }

  public isAuthenticated(): BehaviorSubject<boolean> {
    return this.authenticated$;
  }

  public isLogged(): boolean {
    return this.logged;
  }
}
