import { Component, OnInit } from '@angular/core';
import { ProdserviceService } from '../serve/prodservice.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {
allproduct:any;
  constructor(private ins:ProdserviceService) { }

  ngOnInit(): void {
    this.ins.allprod().subscribe(res=>{
      this.allproduct=res;
      console.log('all product :',res);
      
    })
  }

}


//npm install bootstrap :- bootstrap;
//npm install @popperjs/core :- popperjs;
//ng g m --flat=true --module=app :- Routing Module;
//ng g m name --route name --module app.module :-Lazy Loading 
//ng new project name :- new project;
//ng g c component :-- component;
//npm install -g @ angular/cli;
//npm version : version checking;
//ng g guard auth-guard:-auth guard;
//npx json-server --watch src/assets/Data.db.json:-- for running json server in local host 3000
