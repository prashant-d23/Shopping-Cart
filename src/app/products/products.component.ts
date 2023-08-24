import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Services/shared.service';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  filteredArray:any[] = [];
  searchTerm:string = ''
  constructor(private cartService:CartService, private http:SharedService){}

  ngOnInit(){
    this.http.getFilteredArray().subscribe((filteredArray) => {
      this.filteredArray = filteredArray;
      console.log(this.filteredArray);
    });
  }


  expandedState: boolean[] = [];
  isExpanded: boolean = true;
  toggleDescription(index: any) {
    if (this.filteredArray[index]) {
      this.expandedState[index] = !this.expandedState[index];
    }
  }


  // cart counter

  cartCounter(item:any){
   this.cartService.addtoCart(item)
  item.like = !item.like
  }

removeItem(item:any){
  this.cartService.removeCartItem(item);
  item.like = !item.like
}
}
