import { Component, OnInit } from '@angular/core';
import { ConfirmModel } from '../confirmation/confirm.model';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: ConfirmModel[];

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getOrders().subscribe((data)=>{
      this.orders = JSON.parse(JSON.stringify(data));
    })
  }

}
