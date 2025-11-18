import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { newproduct } from '../newproduct/newproduct';
import { CommonModule } from '@angular/common';
import { Productos } from '../../service/productos';
import {Iisproductos} from '../../models/is.model';
import { Footer } from '../footer/footer';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, Header, newproduct, CommonModule,Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})


export class Home implements OnInit {
  // Lista de rutas de las imágenes para el carrusel
  images = [
    { url: 'recursos/c1.jpeg', alt: 'Primera imagen del carrusel' },
    { url: 'recursos/c2.jpeg', alt: 'Segunda imagen del carrusel' },
    { url: 'recursos/c3.PNG', alt: 'Tercera imagen del carrusel' }
  ];

  productos: Iisproductos [] = [];

  
  isAdmin: boolean = false; 
  constructor(private Productos: Productos ){    
  }

  ngOnInit(): void {
   this.cargarProductos();
  }
 cargarProductos(): void {    
    this.Productos.obtenerProductos().subscribe({
      next: (data) => {
        // Cuando los datos lleguen, los asignamos a la variable local
        this.productos = data;
        console.log('Productos cargados desde el backend:', this.productos);
      },
      error: (err) => {
        // Manejo de error en caso de que el backend no responda
        console.error('Error al cargar productos:', err);
        alert('No se pudo conectar al backend.');
      }
    });
  }

  onsaveRecord(nuevoProducto: Iisproductos){ 
    this.productos.push(nuevoProducto); 
    //this.productos = this.Productos.obtenerProductos();
    //localStorage.setItem('Product', JSON.stringify(this.productos));se elimino esto porque ya no se usa localstorage
  }

  onDeleteRecord(productToDelete: any) { 
    this.productos = this.productos.filter(product => product !== productToDelete);
  }

  
  }
 