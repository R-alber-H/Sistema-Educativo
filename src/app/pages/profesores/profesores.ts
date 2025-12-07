import { Component } from '@angular/core';
import { ProfesoresRegistrados } from '../../datosSimulados/profesores';

@Component({
  selector: 'app-profesores',
  imports: [],
  templateUrl: './profesores.html',
  styleUrl: './profesores.css',
})
export class Profesores {
  profesoresRegistrados = ProfesoresRegistrados;
}
