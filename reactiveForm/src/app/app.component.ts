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
  formSubmited:boolean;
  user: User;

  constructor(){
    this.formSubmited = false;
    this.user = new User('default','advanced','default');
  }

  ngOnInit():void{}

  onSubmitForm():void {
    console.log(this.signupForm);
    this.user = new User(
      this.signupForm.value.email,
      this.signupForm.value.subscription,
      this.signupForm.value.password
    );
    this.showNewUserProfileInConsole();
    this.formSubmited = !this.formSubmited;
  }

  private showNewUserProfileInConsole(): void{
    console.log("New user has been added with details: \n" + this.user.expressYourself());
  }
}
