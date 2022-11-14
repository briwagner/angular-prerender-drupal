import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { ProductNumberComponent } from './product-number/product-number.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'pages/:id',
    component: PagesComponent
  },
  {
    path: 'products/:productUrl',
    component: ProductsComponent
  },
  {
    path: 'product-number/:number',
    component: ProductNumberComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
