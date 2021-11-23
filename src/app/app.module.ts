import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeadComponent } from './lead/lead.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {LeadService} from './lead.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { TokenInterceptor } from './token.interceptor';
import { LeadFormComponent } from './lead-form/lead-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LeadComponent,
    LoginComponent,
    LeadFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule
    
  ],
  providers: [
    LeadService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
