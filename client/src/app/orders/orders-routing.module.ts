import { OrderDetailedComponent } from './order-detailed/order-detailed.component';
import { OrdersComponent } from './orders.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: ':id', component: OrderDetailedComponent, data: { breadcrumb: { alias: 'OrderDetailed' } } }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
