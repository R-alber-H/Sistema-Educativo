import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistrarProfesor } from './modal-registrar-profesor';

describe('ModalRegistrarProfesor', () => {
  let component: ModalRegistrarProfesor;
  let fixture: ComponentFixture<ModalRegistrarProfesor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRegistrarProfesor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRegistrarProfesor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
