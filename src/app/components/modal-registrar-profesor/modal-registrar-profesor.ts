import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal-registrar-profesor',
  standalone: true,
  imports: [],
  templateUrl: './modal-registrar-profesor.html',
  styleUrl: './modal-registrar-profesor.css',
})
export class ModalRegistrarProfesor {

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
