import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartItemList:any[] = []
  //acts as observable and observer
  productList = new BehaviorSubject<any>([]);// initialize with an array

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product)
  }
  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice()
    console.log(this.cartItemList)
  }

  getTotalPrice():number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    });
    this.productList.next(this.cartItemList)
  }

  emptyCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
