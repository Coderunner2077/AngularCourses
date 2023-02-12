import { AuthInterceptor } from "./auth.interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
]

/*
L'utilisation de  HTTP_INTERCEPTORS  dit à Angular qu'il s'agit ici d'un intercepteur HTTP.
J'y attribue la classe AuthInterceptor que je viens de créer.
La clé multi  prévient que je vais certainement ajouter plusieurs intercepteurs à la clé HTTP_INTERCEPTORS.

Un provider est un objet que l'on déclare à Angular pour qu'il puisse l'injecter à différentes endroits de
l'application.

D'ailleurs, même si mes services ne figurent pas ici, ce sont des providers également !
Ils sont déclarés avec  @Injectable()  et Angular peut ensuite les injecter là où j'en ai besoin, comme via
le constructor de mes components, par exemple.

Résumé:
Un intercepteur HTTP intercepte toutes les requêtes HTTP envoyées par mon application pour effectuer des tâches
requises, comme l'ajout d'un header d'autorisation.

Un intercepteur Angular est une classe  @Injectable  qui implémente l'interface HttpInterceptor.

La méthode  intercept()  clone la requête reçue en ajoutant les modifications requises au clone.

intercept()  passe ensuite la nouvelle requête à  next.handle()  pour lui permettre de continuer son chemin.
*/
