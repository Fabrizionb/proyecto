import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  
    
  ]);
  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    
  ]);

  loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: this.emailControl,
      password: this.passwordControl,
    });
  }

  get nombreControl(): AbstractControl | null {
    return this.loginForm.get('email');
  }

  onSubmit(): void {
    this.loginForm.valid ? 
    console.log(this.loginForm.value) :
    alert("Invalid Form");
  }
}


//^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$ requiere al menos una letra mayúscula, un número y un carácter especial.