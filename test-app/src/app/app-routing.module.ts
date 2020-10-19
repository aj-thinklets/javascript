import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenFormsComponent } from './forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tForms', component: TemplateDrivenFormsComponent},
  { path: 'rForms', component: ReactiveFormsComponent}
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

//https://medium.com/@dao.houssene/angular-the-hash-trap-b2d415c2c241
export class AppRoutingModule { }
