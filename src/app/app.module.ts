import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SetupComponent } from './components/setup/setup.component';
import {AppRoutes} from "./app.route";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SetupComponent
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
