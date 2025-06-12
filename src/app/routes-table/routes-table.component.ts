import { Component, OnInit } from '@angular/core';
import { Route } from './models/routes-table.model';
import { RouteService } from './services/routes-table.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-routes-table',
  templateUrl: './routes-table.component.html',
  styleUrls: ['./routes-table.component.scss'],
})
export class RoutesTableComponent implements OnInit {
  routes: Route[] = [];
  sortedColumn: keyof Route | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private routeService: RouteService) {}

  ngOnInit(): void {
    this.loadRoutes();
  }

  loadRoutes(): void {
    this.routeService.getRoutes().subscribe((routes) => {
      this.routes = routes;
    });
  }

  sort(column: keyof Route): void {
    if (this.sortedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }

    this.routeService
      .getRoutes()
      .pipe(
        map((routes) =>
          this.routeService.sortRoutes(routes, column, this.sortDirection)
        )
      );
  }

  getSortIcon(column: keyof Route): string {
    if (this.sortedColumn !== column) return '';
    return this.sortDirection === 'asc' ? '↑' : '↓';
  }

  // getInterfaceOrder(interfaceName: string): number {
  //   const index = this.interfaceOrder.indexOf(interfaceName);
  //   return index === -1 ? this.interfaceOrder.length : index;
  // }
}
