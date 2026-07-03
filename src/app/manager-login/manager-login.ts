import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manager-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manager-login.html'
})
export class ManagerLoginComponent {
  adminUsername: string = '';
  adminPassword: string = '';
  managerLoginError: string = '';
  
  @Output() loginSuccess = new EventEmitter<void>();

  handleManagerLogin() {
    if (this.adminUsername.trim() === 'bonibel.admin@grandlodge.oo' && this.adminPassword === 'b0nib3l@admin123') {
      this.managerLoginError = '';
      this.loginSuccess.emit();
    } else {
      this.managerLoginError = 'Invalid Admin Username or Password Credentials!';
    }
  }
}
