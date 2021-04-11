import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:5000/products');
  }

  singleProduct(id){
    return this.http.get('http://localhost:5000/single', {
      params:{ i: id }
    });
  }

  deleteProduct(id:any){
    return this.http.delete('http://localhost:5000/remove/'+id)
    .subscribe(data=>{console.log(data)})
  }

  newProduct(item){
    return this.http.post('http://localhost:5000/insert', {'product':item})
    .subscribe(data =>{console.log(data)})
  }

  updateProduct(id:any,item){
    return this.http.post('http://localhost:5000/update/'+id,{'product':item})
    .subscribe(data=>{console.log('done')})
  }

  newOrder(item, order){
    return this.http.post('http://localhost:5000/orderInsert',{'product':item, 'order': order} );
  }

  singleOrder(id){
    return this.http.get('http://localhost:5000/singleOrder', {
      params:{ i: id }
    });
  }

  getOrders(){
    return this.http.get('http://localhost:5000/orders');
  }

}
