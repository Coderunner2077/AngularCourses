import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

// Les intercepteurs sont enregistrés différemment des services, donc je n'ajoute surtout pas { providedIn: "root" }
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("is logged: ", this.authService.isLogged());
    if(!this.authService.isLogged()) return next.handle(req);
    const headers = new HttpHeaders()
      .append("Authorization", `Bearer ${this.authService.getToken()}`);
    const modifiedRequest = req.clone({ ...headers }); // requêtes immuable => créer de nouvelles
    return next.handle(modifiedRequest);
  }
}
