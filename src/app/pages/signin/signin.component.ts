import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {SigninModel} from './signin.model'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  informacao : SigninModel = new SigninModel();

  constructor() { }

  ngOnInit(): void {
  }

  salvar(){
    console.log('Signin: ', this.informacao);

    alert('Salvo com sucesso');
  }

}
