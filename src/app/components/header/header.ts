import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  public headerOptions: string[]=['Lo Nuevo ','Hombre ','Mujer ','Nino/a ','Ofertas ','SNKRS ']; 
  public headerIcons: string[]=['<i class="bi bi-heart"></i>','<i class="bi bi-cart-plus"></i>']; 

  articleObj = { //declaracion de las cards
    photo: '',
    name: '',
    description: '',
    clasification: '',
    price: ''
  }
  
  articleList : any = [];// arreglo donde van los elementos
  

}
