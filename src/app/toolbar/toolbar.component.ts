import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  toolbar = [
    { name: 'Home', route: '/home' },
    { name: 'About', route: '/about' },
    { name: 'Contact', route: '/contact' }
  ];

  direction = 'row'; // Definir la variable direction con valor 'row'
}