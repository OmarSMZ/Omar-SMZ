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
 
productList: any = [];//arreglo que guarda los elementos, any es el tipo de dato
product: any;
 
  onsaveRecord(){
     this.productoCreado.emit({...this.ProductObj}); 
    
    this.ProductObj = { Photo: '', Description: '', name: '', price: '' };
    
    console.log('Producto emitido desde NewProduct.');
  }

}