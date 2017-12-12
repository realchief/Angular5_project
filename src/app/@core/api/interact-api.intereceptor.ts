import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InteractApiInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'token <your Interact API token>')
    });
    return next.handle(authReq);
  }
}