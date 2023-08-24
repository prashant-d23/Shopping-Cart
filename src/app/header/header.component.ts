import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private http: SharedService, private cartService:CartService) {}

  productList: any[] = [];
  categories: any[] = [];
  searchTerm: string = '';
  totalCartItem : number = 0;
  ngOnInit() {
    this.http.getDataFromServer('products').subscribe((response: any) => {
      if (response && response.length > 0) {
        this.productList = response;
        this.filteredArray = response;
        this.http.setFilterArray(this.filteredArray)
        this.categories = [
          ...new Set(this.productList.map((cat: any) => cat.category)),
        ];
        this.filteredArray.forEach((item:any)=>{
          Object.assign(item,{quantity:1, total : item.price, like:false}) // added two new fields
        })
      }
      console.log(this.filteredArray)
    });
     this.cartService.getProducts().subscribe(res =>{
      this.totalCartItem = res.length;
     })
  }

  //filter product by category
  type: string = '';
  filteredArray: any[] = [];
  filterByCategory(category: any) {
    // console.log(category.target.value);
    this.type = category.target.value;

    if (this.type == ' ') {
      this.filteredArray = this.productList;
    } else {
      this.filteredArray = this.productList.filter(
        (product) => product.category === this.type
      );
    }
    this.http.setFilterArray(this.filteredArray)
  }

  //filter product by price method 1 using dropdown
  price = '';
  filterByPrice(price: any) {
    this.price = price.target.value;
    if (this.price == 'low') {
      this.filteredArray.sort((a, b) => a.price - b.price);
    } else if (this.price == 'high') {
      this.filteredArray.sort((a, b) => b.price - a.price);
    }
    this.http.setFilterArray(this.filteredArray)
  }

  //filter products by price method 2 using range slider
  priceRange: any[] = [];
  rangePrice = 0;
  filterByPriceRange() {
    this.filteredArray = this.productList.filter(
      (product: any) => product.price <= this.rangePrice
    );
    this.http.setFilterArray(this.filteredArray)
    // console.log(this.filteredArray);
  }

  isHidden: boolean = false;
  toggleSlider() {
    this.isHidden = !this.isHidden;
  }





}
