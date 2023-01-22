import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { ButtonDarkComponent } from './button-dark/button-dark.component';
import { ButtonBlueComponent } from './button-blue/button-blue.component';
import { ButtonRedComponent } from './button-red/button-red.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    MyLibComponent,
    ButtonDarkComponent,
    ButtonBlueComponent,
    ButtonRedComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    MyLibComponent,
    ButtonDarkComponent,
    ButtonBlueComponent,
    ButtonRedComponent
  ]
})
export class MyLibModule { }
