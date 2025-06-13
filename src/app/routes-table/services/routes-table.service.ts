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

  compareIPs(ip1: string, ip2: string): number {
    const parts1 = ip1.split('.').map(Number);
    const parts2 = ip2.split('.').map(Number);

    for (let i = 0; i < 4; i++) {
      if (parts1[i] > parts2[i]) return 1;
      if (parts1[i] < parts2[i]) return -1;
    }
    return 0;
  }

  sortRoutes(
    routes: Route[],
    column: keyof Route,
    direction: Sort.ASC | Sort.DESC
  ): Route[] {
    return [...routes].sort((a, b) => {
      let compareResult: number;

      if (column === 'address' || column === 'gateway') {
        compareResult = this.compareIPs(a[column], b[column]);
      } else {
        compareResult = String(a[column]).localeCompare(String(b[column]));
      }

      return direction === Sort.ASC ? compareResult : -compareResult;
    });
  }
}
