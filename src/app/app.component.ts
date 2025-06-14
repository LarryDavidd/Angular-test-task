import { Component } from '@angular/core';
import { RoutesTableComponent } from './routes-table/routes-table.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h3>Действующие Маршруты IPv4</h3>
      <app-routes-table></app-routes-table>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
      h3 {
        margin-bottom: 10px;
      }
    `,
  ],
  imports: [RoutesTableComponent],
})
export class AppComponent {}
