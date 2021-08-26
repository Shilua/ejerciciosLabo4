import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../classes/user';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user:string = '';
  public password:string = '';
  public userCreds: User;
  public usuarioString:string = '';
  public edadUno:number = 0;
  public edadDOs:number = 0;
  public edadSumada:number = 0;
  public edadPromedio:number = 0;



  constructor(private router: Router) {
    this.userCreds = new User();
  }

  calcular(){
    this.edadSumada = this.edadUno + this.edadDOs;
    this.edadPromedio = this.edadUno*this.edadDOs/2;
  }

  limpiar(){
    this.edadUno = 0;
    this.edadDOs = 0;
    this.edadPromedio = 0;
    this.edadSumada = 0;
  }

  login(){
    
    if (this.user == 'admin' && this.password == 'admin') {
      //this.userCreds.user = this.user;
      //this.userCreds.password = this.password;
      this.router.navigate(['/bienvenido']);

      this.usuarioString = JSON.stringify(this.userCreds);
      localStorage.setItem('usuario', this.usuarioString);
    } else {
      this.router.navigate(['/brror']);
    }
  }

  ngOnInit(): void {
  }

}
