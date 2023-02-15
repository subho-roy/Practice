import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reg,Data } from '../classes/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdserviceService {
allprod_url='https://fakestoreapi.com/products';
singleprod_url='https://fakestoreapi.com/products';
reg_url='https://wtsacademy.dedicateddevelopers.us/api/user/signup'
  constructor(private http:HttpClient) { }

  allprod() :Observable<Data[]>
  {
    return this.http.get<Data[]>(this.allprod_url);
  }

  signup(formData:any):Observable<Reg[]>
  {
    return this.http.post<Reg[]>(this.reg_url,formData);
  }

}
