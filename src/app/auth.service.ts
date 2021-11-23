import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from "../environments/environment"
import { Observable } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL : string = environment.apiUrl + '/users/login'
  jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private http: HttpClient) { }

  isAuthenticated():boolean{
    const token = this.obterToken()
    if(token){
      const expired = this.jwtHelper.isTokenExpired(token)
      return !expired;
    }
    return false;
  }


  obterToken(){
    const tokenString = localStorage.getItem('access_token')
    if(tokenString){
      const token = JSON.parse(tokenString).token
      return token;
    }
    else{
      return null;
    }
  }

  getUsuarioAutenticado(){
    const token = this.obterToken()
    if(token){
      //return this.jwtHelper.decodeToken(token).sub
    }
    return null;
  }

  tentarLogar(username:string, password:string):Observable<any>{
    const params = {
      username,
      password
    }
    const headers = {
      'Content-Type': 'application/json'
    }
    return this.http.post(this.apiURL,params,{headers})
  }
}
