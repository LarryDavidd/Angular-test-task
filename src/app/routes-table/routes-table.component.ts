import { Component, OnInit } from '@angular/core';
import { Sort, Route } from './models/routes-table.model';
import { RouteService } from './services/routes-table.service';
import { SortRoutesPipe } from './pipes/sort-by-address.pipe';
import { NoSelectDirective } from '../shared/derectives/no-select.directive';

@Component({
  selector: 'app-routes-table',
  standalone: true,
  imports: [SortRoutesPipe, NoSelectDirective],
  templateUrl: './routes-table.component.html',
  styleUrls: ['./routes-table.component.scss'],
})
export class RoutesTableComponent implements OnInit {
  routes: Route[] = [];
  sortDirection: Sort = Sort.NONE;
  sortField: keyof Route | null = null;

  constructor(private routeService: RouteService) {}

  ngOnInit(): void {
    this.loadRoutes();
  }

  loadRoutes(): void {
    this.routeService.getRoutes().subscribe((routes) => {
      this.routes = routes;
    });
  }

  getSortCondition(column: keyof Route): string {
    if (this.sortField !== column || this.sortDirection === Sort.NONE) {
      return '';
    }
    return this.sortDirection === Sort.DESC ? 'triangle' : 'triangle inverted';
  }

  sort(item: keyof Route) {
    if (this.sortField !== item) this.sortDirection = Sort.NONE;

    this.sortField = item;

    if (this.sortDirection === Sort.NONE) {
      this.sortDirection = Sort.ASC;
    } else {
      this.sortDirection =
        this.sortDirection === Sort.ASC ? Sort.DESC : Sort.ASC;
    }
  }
}
