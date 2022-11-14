import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productUrl: string
  public loaded: boolean
  public product: Product

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) { }

  ngOnInit(): void {
    this.loaded = false;
    this.productUrl = this.route.snapshot.paramMap.get('productUrl');

    this.productsService.fetch(this.productUrl + '.html')
      .subscribe(
        p => {
          this.product = p;
          this.loaded = true;
        },
        e => console.log(e)
      )
  }

}
