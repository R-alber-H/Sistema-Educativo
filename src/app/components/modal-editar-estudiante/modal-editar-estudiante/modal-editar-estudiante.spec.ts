import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarEstudiante } from './modal-editar-estudiante';

describe('ModalEditarEstudiante', () => {
  let component: ModalEditarEstudiante;
  let fixture: ComponentFixture<ModalEditarEstudiante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditarEstudiante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarEstudiante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
