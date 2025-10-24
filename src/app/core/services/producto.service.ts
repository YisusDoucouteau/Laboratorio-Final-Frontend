import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Categoria { id: number; nombre: string; }
export interface Producto {
  id?: number; nombre: string; precio: number;
  categoria_id?: number|null; categoria?: Categoria;
}

@Injectable({ providedIn: 'root' })
export class ProductoService {
  private base = `${environment.api}/productos`;
  constructor(private http: HttpClient) {}
  list(page=1): Observable<Producto[]> {
    return this.http.get<any>(`${this.base}?page=${page}`).pipe(map(r => r?.data ?? r ?? []));
  }
  get(id: number): Observable<Producto> { return this.http.get<Producto>(`${this.base}/${id}`); }
  create(d: Producto): Observable<Producto> { return this.http.post<Producto>(this.base, d); }
  update(id: number, d: Partial<Producto>): Observable<Producto> { return this.http.put<Producto>(`${this.base}/${id}`, d); }
  remove(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/${id}`); }
}
