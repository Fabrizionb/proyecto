import { Component } from '@angular/core';

interface Student {
  name: string;
  age: number;
  subscription: boolean;
  email: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoading = false;
  estudiantes: Student[] = [
    {
      name: 'Juan Velazquez',
      age: 20,
      subscription: true,
      email: "123@123.com"
    },
    {
      name: 'Maria Perez',
      age: 25,
      subscription: false,
      email: "123@123.com"
    },
    {
      name: 'Pedro Martinez',
      age: 30,
      subscription: true,
      email: "123@123.com"
    },
    {
      name: 'Luisa Lopez',
      age: 35,
      subscription: false,
      email: "123@123.com"
    }
  ];
  showTableContent = false;

  showTable() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.showTableContent = true;
    }, 3000);
  }
}