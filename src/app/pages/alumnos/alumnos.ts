import { Component } from '@angular/core';
import { AlumnosRegistrados } from '../../datosSimulados/alumnos';

@Component({
  selector: 'app-alumnos',
  standalone:true,
  imports: [],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css',
})
export class Alumnos {
  alumnosRegistrados = AlumnosRegistrados;
}
