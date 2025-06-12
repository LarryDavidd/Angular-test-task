import { Component } from '@angular/core';
import { RoutesTableComponent } from './routes-table/routes-table.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Таблица маршрутов</h1>
      <app-routes-table></app-routes-table>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
      }
      h1 {
        text-align: center;
        margin-bottom: 30px;
        color: #333;
      }
    `,
  ],
  imports: [RoutesTableComponent],
})
export class AppComponent {}
