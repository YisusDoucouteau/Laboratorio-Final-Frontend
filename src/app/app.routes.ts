
import { Routes } from '@angular/router';
import { LayoutComponent }   from './layout/layout';
import { HomeComponent }     from './home/home';
import { NotFoundComponent } from './not-found/not-found';
import { ProductosComponent } from '../pages/productos/productos.component'; 
export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'productos', component: ProductosComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
