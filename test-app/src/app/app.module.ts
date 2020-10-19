import { BrowserModule } from '@angular/platform-browser';

//Reactive and Template driven form dependency
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
//Ng bootstrap 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

//All component created in this project
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { TemplateDrivenFormsComponent } from './forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';

import { NavbrComponent } from './navbr/navbr.component';
import { HomeComponent } from './home/home.component';

import {PrettyPrintPipe} from './pretty-print-pipe'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    TemplateDrivenFormsComponent,
    NavbrComponent,
    HomeComponent,
    ReactiveFormsComponent,
    PrettyPrintPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
