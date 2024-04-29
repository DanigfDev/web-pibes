import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-ruleta',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, MatButtonModule],
  templateUrl: './ruleta.component.html',
  styleUrl: './ruleta.component.css'
})

export class RuletaComponent {
  equipos: string[] = [
    'assets/Equipos/Alaves.png',
    'assets/Equipos/Almeria.png',
    'assets/Equipos/AMadrid.png',
    'assets/Equipos/Athletic.png',
    'assets/Equipos/Barsa.png',
    'assets/Equipos/Betis.png',
    'assets/Equipos/Cadiz.png',
    'assets/Equipos/Celta.png',
    'assets/Equipos/Getafe.png',
    'assets/Equipos/Girona.png',
    'assets/Equipos/Granada.png',
    'assets/Equipos/LasPalmas.png',
    'assets/Equipos/Mallorca.png',
    'assets/Equipos/Osasuna.png',
    'assets/Equipos/Rayo.png',
    'assets/Equipos/RealMadrid.png',
    'assets/Equipos/RealSociedad.png',
    'assets/Equipos/Sevilla.png',
    'assets/Equipos/Valencia.png',
    'assets/Equipos/Villareal.png',
  ];
  resultado: string | null = null;
  equipoResaltado: number | null = null;
  resultadoSeleccion: string | null = null;
  velocidad: number = 50;
  tiempoMinimo: number = 0; // Tiempo mínimo para mostrar el resultado de la selección en milisegundos
  tiempoMaximo: number = 7000; // Tiempo máximo para mostrar el resultado de la selección en milisegundos


 constructor() {}

girarRuleta(){
  this.equipoResaltado = null; // Reiniciar el equipo resaltado
  this.resultadoSeleccion = null; // Reiniciar el resultado de la selección

  let index = 0;
  const intervalo = setInterval(() => {
    this.equipoResaltado = index;
    index = (index + 1) % this.equipos.length;
  }, this.velocidad);

  const tiempoAleatorio = this.generarTiempoAleatorio();
  setTimeout(() => {
    clearInterval(intervalo);
    this.mostrarResultado();
  }, tiempoAleatorio);
 }

generarTiempoAleatorio(): number {
  return Math.floor(Math.random() * (this.tiempoMaximo - this.tiempoMinimo + 1) + this.tiempoMinimo);
}

mostrarResultado() {
  this.resultadoSeleccion = this.equipoResaltado !== null ? this.equipos[this.equipoResaltado] : null;
  }
}
