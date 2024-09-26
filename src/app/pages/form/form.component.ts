import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  // première chose  un form group

  contactForm: FormGroup = new FormGroup({
    'email': new FormControl('azeazeaze@',[Validators.required, Validators.email]),
    'message': new FormControl('',[Validators.required]),


    }

  );
  onSubmit(){
    if(this.contactForm.valid){
      console.log(this.contactForm.value);
    }

  }
  getErrorMessages(type:string){
    if(this.contactForm.get(type)?.hasError('required')){
      return "il faut un email"
    }
    return ''
  }




}
