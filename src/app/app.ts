import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Header } from './components/header/header';
import { Login } from './components/login/login'; 
import { newproduct } from './components/newproduct/newproduct';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,Header,Login,newproduct],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('store-online');
}
