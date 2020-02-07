import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'recommendation', component: RecommendationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
