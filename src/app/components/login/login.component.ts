import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup,FormBuilder, } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router: Router, 
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  IsAllreadyLogin() {
    let token = localStorage.getItem("token");
    if(token) {
      this.router.navigate(['/home']);
    }
  }
  
  form:any;
  ngOnInit() {
    this.IsAllreadyLogin();
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  } 
  onSubmit() {
    let data = this.form.value;
    if(this.form.valid) {
      if(data.username == 'abc@gmail.com' && data.password == '123456') {
        //save data in browser to check the person is alredy login 
        this.SaveDataOnLocalStorage();
        //navigate to home
        this.router.navigate(['/home']);
        //propmt
        this.toastr.success('You are Loggedin', 'Success');
      } else {
        this.toastr.error('Invalid username or password', 'Error');
      }
    } else {
      this.toastr.error('Fill all fields', 'Error');
    }
  }

  SaveDataOnLocalStorage() {
    localStorage.setItem('user_name', this.form.value.username)
    localStorage.setItem('token', '12wqK&^1qa');
  }

}
