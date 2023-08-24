import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Services/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  selectedProduct:any = [];
  selectedId : string | null = '';
  constructor(private http:SharedService, private route:ActivatedRoute){

  }
  ngOnInit() {
    this.selectedId = this.route.snapshot.queryParamMap.get('id')
   this.getData();
  }

  getData(){
    let url = 'products/' + this.selectedId;
    this.http.getDataFromServer(url).subscribe((response:any)=>{
      console.log(response)
      this.selectedProduct = response;
    })
  }

}
