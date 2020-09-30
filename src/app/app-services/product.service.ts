import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Product } from "../product.modal";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  productData: Product;

  constructor(private $fb: FormBuilder) {}

  productForm(): FormGroup {
    return this.$fb.group({
      code: [null, Validators.required],
      name: [null, Validators.required],
      image: [null, Validators.required],
      hsnCode: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
    });
  }
}
