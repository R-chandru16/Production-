import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  registerUsingAPI(user: User) {
    throw new Error('Method not implemented.');
  }

token:string;

  constructor(private httpclient:HttpClient) {
this.token=localStorage.getItem("jwt")!!
   }

   
   SendFile(file:FormData) {
    var header=new HttpHeaders({
   
      'x-access-token': localStorage.getItem("jwt")!!.toString()
    })
       return this.httpclient.post("http://127.0.0.1:7000/",file,{headers:header})
   }
   getBar():Observable<Blob>{
    var header=new HttpHeaders({
     
      'x-access-token': localStorage.getItem("jwt")!!.toString()
    })
     return this.httpclient.get("http://127.0.0.1:7000/getBar",{headers:header, responseType: 'blob'})
   }
   getPie():Observable<Blob>{
    var header=new HttpHeaders({
     
      'x-access-token': localStorage.getItem("jwt")!!.toString()
    })
    return this.httpclient.get("http://127.0.0.1:7000/getPie",{headers:header, responseType: 'blob'})
  }
  getHist():Observable<Blob>{
    var header=new HttpHeaders({
     
      'x-access-token': localStorage.getItem("jwt")!!.toString()
    })
    return this.httpclient.get("http://127.0.0.1:7000/getHist",{headers:header, responseType: 'blob'})
  }
}