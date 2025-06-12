import { Pipe, PipeTransform } from '@angular/core';
import { Route, Sort } from '../models/routes-table.model';

@Pipe({
  name: 'sortRoutes',
})
export class SortRoutesPipe implements PipeTransform {
  transform(routes: Route[], field: keyof Route, direction: Sort): Route[] {
    if (!routes || direction === Sort.NONE) return routes || [];

    return [...routes].sort((a, b) => {
      let compareResult = 0;

      if (field === 'address' || field === 'gateway') {
        compareResult = this.compareIPs(a[field], b[field]);
      } else {
        compareResult = String(a[field]).localeCompare(String(b[field]));
      }

      return direction === Sort.ASC ? compareResult : -compareResult;
    });
  }

  private compareIPs(ip1: string, ip2: string): number {
    if (ip1 === ip2) return 0;
    if (ip1 === '0.0.0.0') return -1;
    if (ip2 === '0.0.0.0') return 1;

    const parts1 = ip1.split('.').map(Number);
    const parts2 = ip2.split('.').map(Number);

    for (let i = 0; i < 4; i++) {
      if (parts1[i] > parts2[i]) return 1;
      if (parts1[i] < parts2[i]) return -1;
    }

    return 0;
  }
}
