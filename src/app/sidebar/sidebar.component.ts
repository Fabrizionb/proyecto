
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  sidebar = [
    { name: 'Cursos', route: '/home' },
    { name: 'Profesores', route: '/about' },
    { name: 'Alumnos', route: '/contact' }
  ];
  direction = 'column';

  onSelect(ev: string)  {
    console.log(ev)
  }
}