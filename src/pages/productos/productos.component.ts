import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService, Producto } from '../../app/core/services/producto.service'; 

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Productos</h2>
    <button (click)="crear()">Crear demo</button>
    <ul><li *ngFor="let p of productos">{{ p.nombre }} - {{ p.precio }}</li></ul>
  `,
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private api: ProductoService) {}
  ngOnInit(){ this.api.list().subscribe((r: any) => this.productos = r.data ?? r); }
  crear(){ this.api.create({ nombre:'Demo', precio:100, categoria_id:null })
           .subscribe((p: Producto) => this.productos = [p, ...this.productos]); }
}
