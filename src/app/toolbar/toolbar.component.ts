import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
 menuItems = [
    { name: 'Home', route: '/home' },
    { name: 'About', route: '/about' },
    { name: 'Contact', route: '/contact' }
  ];
}
