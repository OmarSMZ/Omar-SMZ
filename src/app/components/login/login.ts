import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Home } from '../home/home';
import { FormsModule } from "@angular/forms";
import { Header } from '../header/header';
import { newproduct } from '../newproduct/newproduct';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
loginObj: any = {
  correo: '',
  password: '',
  selectedRole: ''
}
router = inject(Router);

  onlogin(){
    if(this.loginObj.correo=='01' && this.loginObj.password=='123' && this.loginObj.selectedRole == 'Admin'){
    
      this.router.navigateByUrl("/home")
      localStorage.setItem('userRole','Admin');
    }
    if(this.loginObj.correo=='02' && this.loginObj.password=='123' && this.loginObj.selectedRole == 'User'){
    
      this.router.navigateByUrl("/home")
      localStorage.setItem('userRole','User');
    }
  }
}
