import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SessionService } from '../../shared/session.service';
import { User } from '../../shared/models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public myForm: FormGroup;

  hide = true;
  msg = '';
  constructor( private session: SessionService, private fb: FormBuilder
    , public router: Router, private service: AuthService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['sa', [Validators.required]],
      password: ['123', Validators.required],
    });
  }

  submit(myForm: FormGroup) {
    this.service.login(myForm.value as User).subscribe(
      r => {
        console.log(r);
        this.session.doSignIn(r as User);
        this.router.navigate(['/home']);
      }
    )

  }
}
