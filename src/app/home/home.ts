// src/app/home/home.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService, Producto } from '../core/services/producto.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productos: Producto[] = [];
  form: Partial<Producto> = { nombre: '', precio: 0, categoria_id: null };
  editId: number | null = null;

  constructor(private api: ProductoService) {}

  ngOnInit(): void {
  this.api.list().subscribe({
    next: (arr) => this.productos = arr,
    error: (e) => console.error('API productos error:', e)
  }
);}
  guardar(): void {
    if (this.editId == null) {
      this.api.create(this.form as Producto).subscribe(p => {
        this.productos = [p, ...this.productos];
        this.resetForm();
      });
    } else {
      this.api.update(this.editId, this.form).subscribe(p => {
        this.productos = this.productos.map(x => x.id === p.id ? p : x);
        this.editId = null; this.resetForm();
      });
    }
  }

  editar(p: Producto): void {
    this.editId = p.id!;
    this.form = { nombre: p.nombre, precio: p.precio, categoria_id: p.categoria_id ?? null };
  }

  borrar(id: number): void {
    this.api.remove(id).subscribe(() => {
      this.productos = this.productos.filter(x => x.id !== id);
    });
  }

resetForm(): void {
  this.form = { nombre: '', precio: 0, categoria_id: null };
}
}
