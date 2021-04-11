import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../products/product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  product: ProductModel[];
  public id:string;
  public qty: number;

  constructor(private productService: ProductService, private router: Router, 
    private route: ActivatedRoute, public auth: AuthService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.singleProduct(this.id).subscribe((data)=>{
      this.product = JSON.parse(JSON.stringify(data));
    })
  }

  delete(){
    this.productService.deleteProduct(this.id);
    this.router.navigate(['/products']);
  }

}
