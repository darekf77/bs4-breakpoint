//#region @browser
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bs4BreakpointComponent } from './bs4-breakpoint.component';
import { Bs4BreakpointModule as BootstrapBreakpointModule  } from '../lib/bs4-breakpoint.module';
import { StaticColumnsModule } from 'static-columns';
import { FiredevGithubForkMeCornerModule } from 'firedev-ui';

@NgModule({
  imports: [
    CommonModule,
    StaticColumnsModule,
    FiredevGithubForkMeCornerModule,
    BootstrapBreakpointModule,
  ],
  declarations: [Bs4BreakpointComponent],
  exports: [Bs4BreakpointComponent]
})
export class Bs4BreakpointModule { }
//#endregion
