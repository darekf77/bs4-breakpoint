import { Component, OnInit } from '@angular/core';
import { EnumValues } from 'enum-values/src/enumValues';
import { BreakPoint } from '../components/bs4-breakpoint.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bs4-breakpoint',
  templateUrl: './bs4-breakpoint.component.html',
  styleUrls: ['./bs4-breakpoint.component.css']
})
export class Bs4BreakpointComponent implements OnInit {

  public value: Observable<string>;

  constructor(
    // private swUpdate: SwUpdate,
  ) {

  }

  ngOnInit() {

    // if (this.swUpdate.isEnabled) {

    //   this.swUpdate.available.subscribe(() => {

    //     if (confirm("New version available. Load New Version?")) {
    //       window.location.reload();
    //     }

    //   });

    // }
  }

  breakpoint: BreakPoint;
  breakpointString: string;
  resize(breakpoint: BreakPoint) {
    this.breakpoint = breakpoint;
    const b = EnumValues.getNameFromValue(BreakPoint, breakpoint);
    this.breakpointString = b;
  }


}
