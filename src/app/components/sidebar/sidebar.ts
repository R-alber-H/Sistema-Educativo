import { Component, inject } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth/auth-service';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  imports: [ RouterLink,RouterLinkActive,AsyncPipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  auth = inject(AuthService);

  usuario$ = this.auth.usuarioActual$;

}
