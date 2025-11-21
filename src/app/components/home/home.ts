import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { newproduct } from '../newproduct/newproduct';
import { CommonModule } from '@angular/common';
import { Productos } from '../../service/productos';
import {Iisproductos} from '../../models/is.model';
import { Footer } from '../footer/footer';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, Header, newproduct, CommonModule,Footer,RouterLink],
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

  
  public isAdmin: boolean = false; 

  constructor(private Productos: Productos ){    
    this.checkUserRole();
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

  checkUserRole() {
    // Obtener el rol guardado durante el login
    const role = localStorage.getItem('userRole'); 
    
    // Si el rol es 'Admin', establecemos isAdmin a true
    this.isAdmin = role === 'Admin';
    console.log('Rol de Usuario:', role, '| Permisos de Admin:', this.isAdmin);
  }
  }
 