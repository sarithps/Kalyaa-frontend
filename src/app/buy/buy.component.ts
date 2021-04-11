import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../products/product.model';
import { OrderModel } from './order.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  public product: ProductModel[];
  public id:string;
  public qty: number;
  public price: number;
  public oId: string;

  orderItem = new OrderModel(null, null, null, null, null);

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    var q = this.route.snapshot.paramMap.get('qty');
    this.qty = Number(q);
    this.orderItem.qty = this.qty;
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.singleProduct(this.id).subscribe((data)=>{
      this.product = JSON.parse(JSON.stringify(data));
    });
  }

  async order(){
    this.productService.newOrder(this.product, this.orderItem)
    .subscribe(data=>{ 
      this.oId = JSON.parse(JSON.stringify(data)); 
      this.router.navigate(['/confirmation/' + this.oId]);
    })

    
  }

}
