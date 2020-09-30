import { Component, OnInit } from '@angular/core';
import { ProductService } from '../app-services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  product: any;
  constructor(private $productService: ProductService) {
    if (this.$productService.productData) {
      this.product = this.$productService.productData;
      const viewProduct = JSON.stringify(this.product);
      localStorage.setItem('viewProduct', viewProduct);
    } else {
      this.product = JSON.parse(localStorage.getItem('viewProduct'));
    }
  }
  ngOnInit(): void {
  }





}
