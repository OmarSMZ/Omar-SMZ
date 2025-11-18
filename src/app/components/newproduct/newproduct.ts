import { Component, Output, EventEmitter } from '@angular/core'; // ¡Importaciones esenciales para la comunicación!
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newproduct',
  imports: [FormsModule],
  templateUrl: './newproduct.html',
  styleUrl: './newproduct.css'
})
export class newproduct {
  @Output() productoCreado = new EventEmitter<any>();

   ProductObj={
    Photo: '',
    Description: '',
    name:'',
    price:''
  }
 
  constructor() {}

  // **FUNCIÓN CLAVE**
  // Maneja el evento de selección del archivo y lo convierte a Base64
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      
      reader.onloadend = () => {       
        this.ProductObj.Photo = reader.result as string;
      };
      
      reader.readAsDataURL(file);
    }
  }
productList: any = [];//arreglo que guarda los elementos, any es el tipo de dato
product: any;
 
  onsaveRecord(){
     if (!this.ProductObj.Photo) {
      this.ProductObj.Photo = ''; 
    }
     this.productoCreado.emit({...this.ProductObj}); 
    
    this.ProductObj = { Photo: '', Description: '', name: '', price: '' };
    
    console.log('Producto emitido desde NewProduct.');
  }

}