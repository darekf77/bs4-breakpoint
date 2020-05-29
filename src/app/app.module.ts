import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { Bs4BreakpointModule } from 'components';
import { ServiceWorkerModule } from '@angular/service-worker';

const workrPath = `ngsw-worker.js`;
console.log(`Worker path: ${workrPath}`)

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    Bs4BreakpointModule,
    ServiceWorkerModule.register(workrPath, {
      enabled: true,
      registrationStrategy: 'registerImmediately'
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
