import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { LeadService } from '../lead.service';
import { Lead } from './lead';
import { Status } from '../status/status';
@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {
   todo : Array<Lead> = [
    
  ] ;

  done : Array<Lead>  = [
    
  ];

  finished : Array<Lead>  = [
    
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      console.log(event.previousContainer)
      let newStatus = new Status();
      let newLead ;

      if(event.container.id === "2"){
        newStatus.description = "Cliente em Potencial"
        newStatus.id = 2
      }
      else{
        if(event.container.id === "3"){
          newStatus.description = "Dados Confirmados"
          newStatus.id = 3
        }
        else{
          newStatus.description = "Reunião Agendada"
          newStatus.id = 4
        }
      }
      let moveditem= JSON.parse(JSON.stringify(event.container.data[event.currentIndex]));
      newLead = {
        "customerName" : moveditem.customername,
        "customerEmail": moveditem.customeremail,
        "customerPhone" : moveditem.customerphone,
        "status":newStatus

      }

      this.service.update(moveditem.id,newLead).subscribe(resposta =>{

       
        
        console.log(resposta)
      })
    }
  }
  constructor(
    private service : LeadService
  ) { 
    this.todo = [];
    service.getLead().subscribe(resposta =>{

      this.todo = resposta.filter(item => item.status && item.status.id === 2)
      this.done = resposta.filter(item => item.status && item.status.id === 3)
      this.finished = resposta.filter(item => item.status && item.status.id === 4)
      console.log(this.todo)
    })
  }

  ngOnInit(): void {
    this.todo = [];
    this.service.getLead().subscribe(resposta =>{

      this.todo = resposta.filter(item => item.status && item.status.id === 2)
      this.done = resposta.filter(item => item.status && item.status.id === 3)
      this.finished = resposta.filter(item => item.status && item.status.id === 4)
      console.log(this.todo)
    })
  }

}
