import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css'],
})
export class ReactiveformsComponent implements OnInit {
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      emailid: new FormControl('', Validators.required),
      pwd: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }

  submit(values) {
    console.log(values);
  }
}
