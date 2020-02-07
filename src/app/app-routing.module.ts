import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'recommendation', component: RecommendationComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userprofile', component: UserprofileComponent }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
