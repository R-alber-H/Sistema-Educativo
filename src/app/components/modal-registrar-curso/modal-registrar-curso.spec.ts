import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistrarCurso } from './modal-registrar-curso';

describe('ModalRegistrarCurso', () => {
  let component: ModalRegistrarCurso;
  let fixture: ComponentFixture<ModalRegistrarCurso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRegistrarCurso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRegistrarCurso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
