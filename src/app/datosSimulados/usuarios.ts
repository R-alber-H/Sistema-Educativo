
export type UserRol = 'ADMIN' | 'PROFESOR' | 'ESTUDIANTE';

export interface Usuario {
  id: number;
  name: string;
  correo: string;
  rol: string;
  password:string;
}
export interface UsuarioLogueadao{
  name: string;
  correo: string;
  rol: string;
}

export const Usuarios: Usuario[] = [
  {
    id: 1,
    name: 'Cesar',
    rol: 'ADMIN',
    correo: 'admin@universidad.com',
    password: '123456'
  },
  {
    id: 2,
    name: 'Bob',
    rol: 'PROFESOR',
    correo: 'profesor@universidad.com',
    password: '123456'
  },
  {
    id: 3,
    name: 'juan',
    rol: 'ESTUDIANTE',
    correo: 'estudiante@universidad.com',
    password: '123456'
  }
];
