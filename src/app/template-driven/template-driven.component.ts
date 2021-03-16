import { Component, OnInit } from '@angular/core';
import {LoginModel} from 'src/app/models/login.model';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent {

  loginModel = new LoginModel();
  submit(values){
      console.log(values);  
  }
}
