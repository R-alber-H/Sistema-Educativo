import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistrarEstudiante } from './modal-registrar-estudiante';

describe('ModalRegistrarEstudiante', () => {
  let component: ModalRegistrarEstudiante;
  let fixture: ComponentFixture<ModalRegistrarEstudiante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRegistrarEstudiante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRegistrarEstudiante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
