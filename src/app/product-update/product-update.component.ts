import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../products/product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  public id: string;
  product: ProductModel[];

  constructor(private productService: ProductService, private route: ActivatedRoute,private router: Router) { }

  productItem = new ProductModel(null, null, null, null, null, null, null);

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.singleProduct(this.id).subscribe((data)=>{
      this.product = JSON.parse(JSON.stringify(data));
    })
  }

  update(){
    this.productService.updateProduct(this.id ,this.productItem);
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
