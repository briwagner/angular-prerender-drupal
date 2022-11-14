import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private urlBase: string = 'http://localhost:3010/'

    constructor(private http: HttpClient) { }

    /**
     * Fetch from Drupal default REST endpoint.
     *
     * @param {string} path
     *   Drupal alias.
     */
    fetch(path: string) {
      path = this.urlBase + path;
      let params = new HttpParams().set('_format', 'json');
      let resp = this.http
        .get(path, {
          params: params
        })
        .pipe(map(resp => this.convertProduct(resp)));

      return resp;
    }

    /**
     * Fetch from View.
     *
     * @param {string} num
     *   Product number, passed as query param.
     */
    fetchNumber(num: string) {
      let path = this.urlBase + 'product-feed';
      let params = new HttpParams().set('pnum', num);
      let resp = this.http
        .get(path, {
          params: params
        })
        .pipe(map(resp => this.convertProductView(resp)));

      return resp;
    }

    /**
     * Convert from raw Drupal REST output
     *
     * @return {Product}
     */
    convertProduct(data) {
      let p = new Product({
        title: data.title.length ? data.title[0].value : '',
        body: data.field_product_description? data.field_product_description[0].processed : '',
        features: processFieldArray(data.field_features),
        image: data.field_images.length ? data.field_images[0] : ''
      })
      return p;
    }

    /**
     * Convert from Views output
     *
     * @return {Product}
     */
    convertProductView(data) {
      if (!data.length) {
        return null;
      }
      var data = data[0];

      // Build IMG object to pass to template.
      let img = {
        url: 'http://localhost:3010' + data.field_images,
        alt: data.title
      }
      let p = new Product({
        title: data.title,
        body: data.field_product_description,
        features: [],
        featuresRendered: data.field_features,
        image: img
      })
      return p;
    }
}

/**
 * Helper to extract from multi-value HTML field.
 *
 * @return {Array<string>}
 */
function processFieldArray(data: string) {
  let vals = [];
  for (let i = 0; i < data.length; i++) {
    vals.push(data[i]['processed'])
  }
  return vals;
}