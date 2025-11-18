import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from "@angular/forms";
import {users} from '../../models/is.model';
import { Productos } from '../../service/productos';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
loginObj: users = {
  correo: '',
  contra: '',
  nombre: '',
  telefono: '',
  rol: ''
}
router = inject(Router);
productosService = inject(Productos); // ⬅️ ¡Ahora inyectamos el servicio Productos!

onlogin(){
this.productosService.login(this.loginObj).subscribe({
      next: (response) => {
        // 1. Almacenar el token y el rol que vienen del API
        localStorage.setItem('authToken', response.token); 
        localStorage.setItem('userRole', response.role); 

        // 2. Redirigir al home
        this.router.navigateByUrl("/home");
      },
   
    });
  }


  accessAsUser() {
    // Establecemos las credenciales y el rol del usuario '02'
    this.loginObj.correo = '02';
    this.loginObj.contra = '123';
   
    
    // Llamamos a la función de login para que aplique la lógica del IF
    this.onlogin();
  }
}
