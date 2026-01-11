import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { AboutPage } from './pages/about-page/about-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
    {path: '', component: HomePage },
    {path: 'login', component: LoginPage },
    {path: 'about', component: AboutPage },
    {path: 'contact', component: ContactPage },
    {path: '**', redirectTo: '' }
];
