import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-newproduct',
  imports: [FormsModule],
  templateUrl: './newproduct.html',
  styleUrl: './newproduct.css'
})
export class newproduct {
 
   ProductObj={
    Photo: '',
    Description: '',
    name:'',
    price:''
  }
 
  productList: any = [];//arreglo que guarda los elementos, any es el tipo de dato
product: any;
 
  onsaveRecord(){
    this.productList.push(this.ProductObj);
    localStorage.setItem('Product',JSON.stringify(this.productList))
    console.log(this.productList);
  }

}