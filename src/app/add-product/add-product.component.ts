import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../app-services/product.service';
import { Product } from '../product.modal';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm = this.$productService.productForm();

  constructor(private $productService: ProductService, private $router: Router) { }

  ngOnInit(): void {
  }

  onAddProduct() {
    let products = [];
    const isFirstProduct = JSON.parse(localStorage.getItem('products'));
    if (isFirstProduct) {
      products = isFirstProduct;
    }
    const newProductData = this.productForm.value;
    products.push(newProductData);
    const updatedProducts = JSON.stringify(products);
    localStorage.setItem('products', updatedProducts);
    this.$router.navigate(['home']);
  }



}
