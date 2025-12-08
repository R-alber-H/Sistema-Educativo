import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
auth = inject(AuthService);
router = inject(Router)

logout(){
  this.auth.logout();
  this.router.navigate(['/login']);
}
}
