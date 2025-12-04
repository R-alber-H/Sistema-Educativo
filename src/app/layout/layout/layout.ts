import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "../../components/sidebar/sidebar"; 

@Component({
  selector: 'app-layout',
  imports: [Navbar, RouterOutlet, Sidebar],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
