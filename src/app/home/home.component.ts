import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../app-services/product.service';
import { Product } from '../product.modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[];
  constructor(private $router: Router, private $productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  private getAllProducts() {
    const saveProducts = localStorage.getItem('products');
    this.products = JSON.parse(saveProducts);
  }

  addProduct() {
    this.$router.navigate(['/add-product']);
  }

  deleteProduct(index) {
    this.products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(this.products));
    this.getAllProducts();
  }

  onViewProduct(product) {
    this.$productService.productData = product;
    this.$router.navigate(['view-product']);
  }
}
