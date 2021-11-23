import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LeadService } from '../lead.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.component.html',
  styleUrls: ['./lead-form.component.css']
})
export class LeadFormComponent implements OnInit {
  oportunidades = new FormControl();
  oportunidadesList: string[] = ['RPA', 'Produto Digital', 'Analytics', 'BPM'];

  form: FormGroup = new FormGroup({
    customerName: new FormControl(''),
    customerPhone: new FormControl(''),
    customerEmail: new FormControl(''),
    opportunities: new FormControl(''),
  });
  @Input() error: string | null;

  constructor(
    private service : LeadService,
    private router:Router) { }

  ngOnInit(): void {
  }

  submit() {
    if(this.form && this.form.valid){
      console.log(this.form.value)
      this.service.create(this.form.value).subscribe(response=>{
        this.router.navigate(['/home']) 
      });
      

    }
    
  }

}
