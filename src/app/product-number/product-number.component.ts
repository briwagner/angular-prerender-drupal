import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-number',
  templateUrl: '../products/products.component.html',
})
export class ProductNumberComponent implements OnInit {

  productNumber: string
  public loaded: boolean
  public product: Product

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productNumber = this.route.snapshot.paramMap.get('number');
    this.productsService.fetchNumber(this.productNumber)
      .subscribe(
        p => {
          this.product = p;
          this.loaded = true;
          // console.log(p)
        },
        e => console.log(e)
      )
  }

}
