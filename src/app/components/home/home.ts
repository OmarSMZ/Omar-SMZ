import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { newproduct } from '../newproduct/newproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, Header, newproduct, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  
  isAdmin: boolean = false; 

  productList: any[] = []; 
  
  ngOnInit() {
    const role = localStorage.getItem('userRole');
    this.isAdmin = role === 'Admin'; 

    const storedProducts = localStorage.getItem('Product');
    if (storedProducts) {
      try {
        this.productList = JSON.parse(storedProducts);
      } catch (e) {
        console.error('Error al parsear datos de localStorage:', e);
        this.productList = [];
      }
    }
  }


  onsaveRecord(nuevoProducto: any){ 

    this.productList.push(nuevoProducto); 
    localStorage.setItem('Product', JSON.stringify(this.productList));
  }
  }
 
 












