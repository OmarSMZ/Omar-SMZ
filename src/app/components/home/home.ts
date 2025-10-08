import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { newproduct } from '../newproduct/newproduct';

@Component({
  selector: 'app-home',
  imports: [FormsModule,Header,newproduct],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 
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











