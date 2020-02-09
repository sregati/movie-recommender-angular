import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCardModule, MatGridListModule, MatToolbarModule, MatButtonModule} from '@angular/material';
import {MatNativeDateModule,MatDatepickerModule,MatIconModule,  MatInputModule,MatRadioModule,MatListModule,} from  '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { AuthInterceptor } from './auth-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { UserprofileComponent } from './components/userprofile/userprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RecommendationComponent,
    //UserprofileComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,  
    MatInputModule,
    MatRadioModule,
    MatListModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
