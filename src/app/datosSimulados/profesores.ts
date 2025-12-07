
export interface Profesor {
  codigo: string;
  nombre: string;
  dni: string;
  correo: string;
}

export const ProfesoresRegistrados: Profesor[] = [
  {
    codigo: 'P001',
    nombre: 'Juan Pérez',
    dni: '12345678',
    correo: 'juan.perez@universidad.com'
  },
  {
    codigo: 'P002',
    nombre: 'María López',
    dni: '87654321',
    correo: 'maria.lopez@universidad.com'
  },
  {
    codigo: 'P003',
    nombre: 'Carlos García',
    dni: '11223344',
    correo: 'carlos.garcia@universidad.com'
  },
  {
    codigo: 'P004',
    nombre: 'Ana Torres',
    dni: '44332211',
    correo: 'ana.torres@universidad.com'
  },
  {
    codigo: 'P005',
    nombre: 'Luis Fernández',
    dni: '55667788',
    correo: 'luis.fernandez@universidad.com'
  }
];
