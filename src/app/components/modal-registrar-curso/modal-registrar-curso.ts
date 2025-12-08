import { Component, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-modal-registrar-curso',
  standalone: true,
  imports: [],
  templateUrl: './modal-registrar-curso.html',
  styleUrl: './modal-registrar-curso.css',
})
export class ModalRegistrarCurso {

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
