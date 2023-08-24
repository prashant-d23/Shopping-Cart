import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Services/shared.service';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {

  products : any = [];
  grandTotal:number = 0;

constructor(private cartService:CartService){}

ngOnInit(){
    this.cartService.getProducts().subscribe((res:any)=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
}


removeItem(item:any){
this.cartService.removeCartItem(item);
}

removeAll(){
this.cartService.emptyCart();
}
  // constructor(private http:SharedService){}
  // itemId:any;
  // cartItems:any
  // ngOnInit() {
  //   this.itemId = localStorage.getItem('cartItem')
  //   console.log(this.itemId)

  //   this.getCartItems();
  // }


  // getCartItems(){
  //   let url = 'products/' + this.itemId
  //   this.http.getDataFromServer(url).subscribe((response:any)=>{
  //     this.cartItems = response
  //     console.log(this.cartItems)
  //   })
  // }
}
