import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable }    from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthenticationService} from '../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private authuser :AuthenticationService) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.form = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }
  
  onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
        //alert("============="+username+"==========="+password);
        const loginPayload = {username: username, password: password};
        (this.authuser.authenticate(loginPayload).subscribe(
          data => {
            //alert(sessionStorage.getItem('username'));
            this.router.navigate(['db'])
            this.loginInvalid = false
          },
          error => {
            this.loginInvalid = true
          }
        )
        );
        
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}
