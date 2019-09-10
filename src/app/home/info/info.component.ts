import { SuperService } from './../../shared/super.service';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { scrollAnimation } from '../../shared/scroll-animation';
import { isPlatformBrowser } from '@angular/common';
export class Email {
  email = 'test@mail.io';
  subject = '';
  message = '';
  html = '';
}

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  animations: scrollAnimation,
})
export class InfoComponent implements OnInit {
  lat = 33.927251;
  lng = -6.887098;
  zoom = 15;
  o = new Email();
  myForm: FormGroup;
  state = 'hide';
  constructor(private fb: FormBuilder, public snackBar: MatSnackBar
      , private service: SuperService, @Inject(PLATFORM_ID) protected platformId: Object) { }

  ngOnInit() {
    this.createForm();
  }

  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  createForm() {
    this.myForm = this.fb.group({
      email: [this.o.email, [Validators.required]],
      subject: [this.o.subject],
      message: [this.o.message, [Validators.required]],
      html: this.o.html,
    });
  }


  onSectionChange(pos) {
    if (pos === 5) {
      this.state = 'show';
    }
  }

  // openSnackBar(myForm: FormGroup) {
  //   const message = 'your message will be sended';
  //   const action = 'Undo';
  //   let doSubmit = true;

  //   const snackBarRef = this.snackBar.open(message, action, {
  //     duration: 2000,
  //   });

  //   snackBarRef.afterDismissed().subscribe(() => {
  //     if (doSubmit) {
  //       this.submit(myForm);
  //     }
  //   });

  //   snackBarRef.onAction().subscribe(() => {
  //     doSubmit = false;
  //   });
  // }

  submit(myForm: FormGroup) {
    const obj: Email = myForm.value;
    console.log('message send it : ', obj.message);
    this.service.postEmail(obj).subscribe(
      r => {
        console.log(r);
      }
    );
  }



  get email() { return this.myForm.get('email') as FormControl; }


  getErrorMessage() {
    const email = this.myForm.get('email') as FormControl;
    return email.hasError('required') ? 'You must enter a value' :
      email.hasError('email') ? 'Not a valid email' : '';
  }

}



