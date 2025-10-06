import { Component } from '@angular/core';
import { Inventario } from './inventario/inventario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Inventario],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ← Cambiado aquí
})
export class App {
  title = 'inventario-app';
}