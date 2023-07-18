import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoggedUser } from 'src/app/interfaces/user';
import { RegisterService } from 'src/app/services/register.service';
import { VariablesComponentService } from 'src/app/services/variables-component.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(protected button_v: VariablesComponentService,
    private fb: FormBuilder,
    private user: RegisterService
  ) {
    this.button_v.buttonToggle$.next(false)
  }

  myForm: any
  complete: boolean = false

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(8)]],
      checkbox: ['', [Validators.required]]
    });
  }

  onSubmit(form: FormGroup) {
    const body = {
      email: form.value.email,
      password: form.value.password,
      repeatPassword: form.value.repeatPassword
    }
    if (form.valid && form.value.password === form.value.repeatPassword) {
      this.user.register(body).subscribe({
        next: (data: LoggedUser) => {
          console.log(data)
          this.complete = true
        }
      })
    }
  }
}
