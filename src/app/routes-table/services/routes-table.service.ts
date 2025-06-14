import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Route, Sort } from '../models/routes-table.model';
import { route } from '../data';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  private routes: Route[] = route;

  getRoutes(): Observable<Route[]> {
    return of(this.routes);
  }
}
