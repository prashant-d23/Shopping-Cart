import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  baseUrl:string = 'https://fakestoreapi.com/'
  httpHeaders:HttpHeaders = new HttpHeaders().set("Content-Type","application/json");

  getDataFromServer(endPoint:string){
    let url = this.baseUrl + endPoint;
   return this.http.get(url,{headers:this.httpHeaders});
  }


  filteredArray$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

setFilterArray(arr: any) {
  this.filteredArray$.next(arr);
}

getFilteredArray() {
  return this.filteredArray$.asObservable();
}

}

// cant send array value directly need to use the subject
// filteredArray: any[] = [];

  // setFilterArray(arr: any) {
  //   this.filteredArray = arr;
  //   console.log("set",this.filteredArray)
  // }

  // getFilteredArray() {
  //   return this.filteredArray;
  // }
