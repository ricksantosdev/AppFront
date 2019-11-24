import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientFormComponent } from './client/client.component';
import { OrderFormComponent } from './order/order.component';
import { OrderResolverGuard } from './Order/guards/order-resolver.guards';


const routes: Routes = [
  { path: 'clientForm', component: ClientFormComponent},
  { path: 'orderform', component: OrderFormComponent,  resolve: {order: OrderResolverGuard}}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
