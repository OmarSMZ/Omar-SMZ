import { Routes, RouterModule } from '@angular/router';
import { Home } from './components/home/home';
import { Component} from '@angular/core';
import { Login } from './components/login/login';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer'
import { NgModel } from '@angular/forms';
import { newproduct } from './components/newproduct/newproduct';


export const routes: Routes = [

    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'login',
        component: Login
    },

    {
        path: 'header',
        component: Headers
    },

    {
        path: 'footer',
        component: Footer
    },
    {
        path: 'newproduct',
        component: newproduct
    }
];

