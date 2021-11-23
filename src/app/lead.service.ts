import { Injectable } from '@angular/core';
import { Lead } from './lead/lead';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from './status/status';
import {environment} from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class LeadService {
  apiURL : string = environment.apiUrl
  constructor(
    private http : HttpClient
  ) { }

  getLead(): Observable<any[]> {
    let lead : Lead = new Lead();
    //lead.customerName = "fulano";
    
    return this.http.get<any[]>(this.apiURL+'/lead')
    
    
  }

  update(leadId, newLead) : Observable<any>{


    return this.http.put<Status>(this.apiURL+'/lead/'+leadId,newLead)
  }

  create(newLead): Observable<any>{
    return this.http.post<any>(this.apiURL+'/lead',newLead)

  }
}
