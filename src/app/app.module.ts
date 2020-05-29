import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { Bs4BreakpointModule } from 'components';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    Bs4BreakpointModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
