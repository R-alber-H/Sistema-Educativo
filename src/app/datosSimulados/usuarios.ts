
export type UserRol = 'ADMIN' | 'PROFESOR' | 'ESTUDIANTE';

export interface Usuario {
  id: number;
  name: string;
  email: string;
  rol: string;
  password:string;
}
export interface UsuarioLogueadao{
  name: string;
  email: string;
  rol: string;
}

export const Usuarios: Usuario[] = [
  {
    id: 1,
    name: 'Cesar',
    rol: 'ADMIN',
    email: 'admin@universidad.com',
    password: '123456'
  },
  {
    id: 2,
    name: 'Bob',
    rol: 'PROFESOR',
    email: 'profesor@universidad.com',
    password: '123456'
  },
  {
    id: 3,
    name: 'juan',
    rol: 'ESTUDIANTE',
    email: 'estudiante@universidad.com',
    password: '123456'
  }
];
