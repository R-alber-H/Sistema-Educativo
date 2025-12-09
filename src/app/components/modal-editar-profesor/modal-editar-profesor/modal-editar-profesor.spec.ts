import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarProfesor } from './modal-editar-profesor';

describe('ModalEditarProfesor', () => {
  let component: ModalEditarProfesor;
  let fixture: ComponentFixture<ModalEditarProfesor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditarProfesor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarProfesor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
