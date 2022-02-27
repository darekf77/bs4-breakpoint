import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bs4BreakpointComponent } from './bs4-breakpoint.component';
import { Bs4BreakpointModule as BootstrapBreakpointModule  } from '../components/bs4-breakpoint.module';

@NgModule({
  imports: [
    CommonModule,
    BootstrapBreakpointModule,
  ],
  declarations: [Bs4BreakpointComponent]
})
export class Bs4BreakpointModule { }
