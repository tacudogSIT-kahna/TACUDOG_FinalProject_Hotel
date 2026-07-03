import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manager-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manager-login.html',
  // Linked to your main stylesheet to share frosted card designs automatically
  styleUrls: ['../booking-form/booking-form.css']
})
export class ManagerLoginComponent {
  adminUsername: string = '';
  adminPassword: string = '';
  managerLoginError: string = '';
  
  @Output() loginSuccess = new EventEmitter<void>();

  handleManagerLogin() {
    if (this.adminUsername.trim() === 'bonibel.admin@grandlodge.ooo' && this.adminPassword === 'b0nib3l@admin123') {
      this.managerLoginError = '';
      this.loginSuccess.emit();
    } else {
      this.managerLoginError = 'Invalid Admin Username or Password Credentials!';
    }
    if (this.adminUsername.trim() === 'kahna' && this.adminPassword === '123') {
      this.managerLoginError = '';
      this.loginSuccess.emit();
    } else {
      this.managerLoginError = 'Invalid Admin Username or Password Credentials!';
    }
  }
}
