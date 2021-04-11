import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../products/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-sample-products',
  templateUrl: './sample-products.component.html',
  styleUrls: ['./sample-products.component.css']
})
export class SampleProductsComponent implements OnInit {
  products: ProductModel[];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products = JSON.parse(JSON.stringify(data));
    })
  }

  toBuy(){
    alert('Please login to buy');
    this.router.navigate(['/login']);
  }
}
