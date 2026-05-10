import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-box">

      <div *ngIf="loggedIn">
        <h3 style="color:green; text-align:center;">Login Successful!</h3>
        <p style="text-align:center;">Welcome {{ loginUsername }}</p>
        <p style="text-align:center;"><button (click)="logout()">Logout</button></p>
      </div>

      <div *ngIf="!loggedIn">

        <div *ngIf="showLogin">
          <h4>Login</h4>
          <hr>
          <label>Username:</label><br>
          <input type="text" [(ngModel)]="loginUsername" /><br><br>
          <label>Password:</label><br>
          <input type="password" [(ngModel)]="loginPassword" /><br><br>
          <button (click)="doLogin()">Login</button>
          <p *ngIf="msg" style="color:red;">{{ msg }}</p>
          <br>
          <p>No account? <a href="#" (click)="switchView($event)">Register here</a></p>
        </div>

        <div *ngIf="!showLogin">
          <h4>Register</h4>
          <hr>
          <label>Username:</label><br>
          <input type="text" [(ngModel)]="regUsername" /><br><br>
          <label>Password:</label><br>
          <input type="password" [(ngModel)]="regPassword" /><br><br>
          <button (click)="doRegister()">Register</button>
          <p *ngIf="msg" [style.color]="msgColor">{{ msg }}</p>
          <br>
          <p>Already registered? <a href="#" (click)="switchView($event)">Login</a></p>
        </div>

      </div>

    </div>
  `,
})
export class App {
  showLogin = true;
  loggedIn = false;

  loginUsername = '';
  loginPassword = '';

  regUsername = '';
  regPassword = '';

  msg = '';
  msgColor = 'red';

  // storing users as array
  users = [
    { username: 'admin', password: 'admin' }
  ];

  switchView(e: Event) {
    e.preventDefault();
    this.showLogin = !this.showLogin;
    this.msg = '';
  }

  doLogin() {
    var found = false;
    for(var i = 0; i < this.users.length; i++) {
      if(this.users[i].username == this.loginUsername && this.users[i].password == this.loginPassword) {
        found = true;
        break;
      }
    }

    if(found) {
      this.loggedIn = true;
      this.msg = '';
    } else {
      this.msg = 'Wrong username or password!';
      this.msgColor = 'red';
    }
  }

  doRegister() {
    var alreadyExists = false;
    for(var i = 0; i < this.users.length; i++) {
      if(this.users[i].username == this.regUsername) {
        alreadyExists = true;
      }
    }

    if(alreadyExists) {
      this.msg = 'Username already taken!';
      this.msgColor = 'red';
    } else {
      this.users.push({ username: this.regUsername, password: this.regPassword });
      this.msg = 'Registered! You can now login.';
      this.msgColor = 'green';
      this.showLogin = true;
      this.regUsername = '';
      this.regPassword = '';
    }
  }

  logout() {
    this.loggedIn = false;
    this.loginUsername = '';
    this.loginPassword = '';
  }
}
