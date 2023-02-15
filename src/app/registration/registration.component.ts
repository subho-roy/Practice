import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProdserviceService } from '../serve/prodservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  frmgrp!: FormGroup;
  img: any;
  formval:any;
  constructor(private ins:ProdserviceService) {}

  ngOnInit(): void {
    this.frmgrp = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  fileselected(event: any) {
    console.log('image from file select :', event);
    this.img = event.target.files[0];
  }

  submit(){
    this.formval=this.frmgrp.value;
    console.log('formvalue',this.formval);
    
    const obj:FormData=new FormData();
    obj.append('first_name',this.formval.first_name);
    obj.append('last_name',this.formval.last_name);
    obj.append('email',this.formval.email);
    obj.append('password',this.formval.password);
    obj.append('profile_pic',this.img,this.img.name);
    console.log('formdata object value',obj);
    this.ins.signup(obj).subscribe((res:any)=>{
      console.log('response after registration :',res);
      
    });
  }
  
}
