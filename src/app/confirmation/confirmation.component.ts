import { Component, OnInit } from '@angular/core';
import { ConfirmModel } from './confirm.model';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  order: ConfirmModel[];
  public id: string;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.singleOrder(this.id).subscribe((data)=>{
      this.order = JSON.parse(JSON.stringify(data));
    })
  }

}
