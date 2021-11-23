import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    console.log(this.form)
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      this.service.tentarLogar(this.form.value.username, this.form.value.password)
      .subscribe(resposta =>{
        console.log(resposta)
        const access_token = JSON.stringify(resposta);
        console.log(access_token)

        localStorage.setItem('access_token',access_token)
        this.router.navigate(['/home'])
      },errorResponse =>{
        this.error = "Usuario e/ou senha incorretos"
      })
    }
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
  constructor(
    private router:Router,
    private service : AuthService) { }

  ngOnInit(): void {
  }

}
