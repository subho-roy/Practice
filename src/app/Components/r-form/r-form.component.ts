import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormArray,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.css']
})
export class RFormComponent implements OnInit {
FormG!:FormGroup;
  constructor(private Fb:FormBuilder) { }

  ngOnInit(): void {
    this.FormG=this.Fb.group({
      fname:[''],
      lname:[''],
      email:this.Fb.array([])
    })
  }

  get mail(){
    return this.FormG.get('email') as FormArray;
  }
  addemail()
  {
    this.mail.push(this.Fb.control(''));
  }
  submit(){
    console.log(this.FormG.value);
    
  }
  remove(i:number)
  {
    this.mail.removeAt(i);
  }


}
