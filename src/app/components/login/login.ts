import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Home } from '../home/home';
import { FormsModule } from "@angular/forms";
import { Header } from '../header/header';
import { newproduct } from '../newproduct/newproduct';

@Component({
  selector: 'app-login',
  imports: [RouterLink, Home, FormsModule,Header,newproduct],
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

            

    }
    else{
      alert("Wrong credentials");
    }
  }
}
