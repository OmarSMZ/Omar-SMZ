import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iisproductos } from '../models/is.model'; 

@Injectable({
  providedIn: 'root'
})
export class Productos {
  
  private http = inject(HttpClient)
  // 1. Inyectar el cliente HTTP
 private apiUrl = 'http://localhost:3000'; 
  /**
   * Obtiene la lista de artículos desde la BD.
   */
  obtenerProductos(): Observable<Iisproductos[]> {
    // 2. Realiza la petición GET a tu backend
    return this.http.get<Iisproductos[]>(`${this.apiUrl}/OArt`);
}
/**
   * Realiza la llamada a la API para el login.
   * @param credenciales {correo: string, password: string}
   * @returns Observable de la respuesta de la API (debe contener token y role)
   */
  login(credenciales: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/login`, credenciales);
  }
}