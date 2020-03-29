import { User } from './shared/models/user.model';
import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('simpleForm') signupForm: NgForm;
  defaultSubValue='advanced';
  user: User;

  constructor(){
    
  }

  ngOnInit(){

  }

  onSubmitForm(){
    console.log(this.signupForm);
  }
}
