import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {ApiProductsService} from '../../services/api-products.service';

/*
export function range(min: number, max: number): ValidatorFn {
  return (control: AbstractControl) => {
    // Editable
    if (+control.value >= min && +control.value < max) {
      return null
    } else {
      return { range: 'Este campo debe estar entre ' + min + ' y el ' + max }
    }
  };
}
*/
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  id: string;
  formSignUp: FormGroup;

  get name() {
    return this.formSignUp.get('name')
  }

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiProductsService // deberia ser otro servicio para usuarios
  ) {
    /*
    this.formSignUp = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl(),
      documentNumber: new FormControl(),
      mail: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl(),
      terms: new FormControl(false)
    });
    */
    this.formSignUp = this.formBuilder.group({
      id: null,
      name: ['', [Validators.required]],
      lastname: ['', Validators.required],
      documentNumber: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      terms: [false, Validators.required]
    });
  }

  ngOnInit() {

  }

  saveUser() {
    if (this.id) {
      this.api.updateUser(this.id, this.formSignUp.value)
        .subscribe(
          res => { console.log(res)},
          err => {console.error(err)},
        )
    } else {
      this.api.saveUser(this.formSignUp.value)
        .subscribe(
          id => this.id = id,
          err => {console.error(err)},
        )
    }

    /*
    this.formSignUp.patchValue({
      id: id
    })
    */
  }

  deleteUser() {
    this.api.deleteUser(this.id)
      .subscribe(
        res => {
          console.log(res);
          this.id = null;
        },
        err => {console.error(err)},
      )
  }

}
