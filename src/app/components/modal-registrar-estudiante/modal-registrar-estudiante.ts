import {  Component, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-modal-registrar-estudiante',
  standalone: true,
  imports: [],
  templateUrl: './modal-registrar-estudiante.html',
  styleUrl: './modal-registrar-estudiante.css',
})
export class ModalRegistrarEstudiante {

  @ViewChild('modal', { static: true }) modalElement!: ElementRef;

  private modal: any;

  abrirModal() {
    this.modal = new (window as any).bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  cerrarModal() {
    if (this.modal) {
      this.modal.hide();
    }
  }
}
