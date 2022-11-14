import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';

import { ProductsService } from './products.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductNumberComponent } from './product-number/product-number.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ProductsComponent,
    ProductNumberComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
