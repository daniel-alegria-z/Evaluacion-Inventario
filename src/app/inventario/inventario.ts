import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Producto {
  nombre: string;
  cantidad: number;
  precio: number;
}

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inventario.html',
  styleUrls: ['./inventario.css']
})

export class Inventario {
  nombreProducto: string = '';
  cantidad: number | null = null;
  precio: number | null = null;

  productos: Producto[] = [];

  agregarProducto() {
    if (
      typeof this.nombreProducto === 'string' &&
      this.nombreProducto.trim() !== '' &&
      typeof this.cantidad === 'number' &&
      !isNaN(this.cantidad) &&
      typeof this.precio === 'number' &&
      !isNaN(this.precio)
    ) {
      this.productos = [
        ...this.productos,
        {
          nombre: this.nombreProducto.trim(),
          cantidad: this.cantidad,
          precio: this.precio
        }
      ];
      this.nombreProducto = '';
      this.cantidad = null;
      this.precio = null;
    }
  }
}