import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../products/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public url: string;

  constructor(private productService: ProductService, private router: Router) { }

  productItem = new ProductModel(null, null, null, null, null, null, null);

  ngOnInit(): void {
  }

  addProduct(){
    this.productService.newProduct(this.productItem);
    this.router.navigate(['/products']);
  }

  // note: this read function is created to solve my problem of getting c:\fakepath\imagename as input
  // and therefore resulting problem of loading image, please avoid this function if needed.

  read(event) {
    var str = (<HTMLInputElement>document.getElementById("input")).value; 
    // console.log(str.slice(12));
    this.productItem.image = str.slice(12);

  }
}
