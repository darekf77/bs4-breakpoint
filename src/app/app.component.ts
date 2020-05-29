import { Component, OnInit } from '@angular/core';
import { BreakPoint } from 'components';
import { EnumValues } from 'enum-values';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  breakpoint: BreakPoint;
  breakpointString: string;
  resize(breakpoint: BreakPoint) {
    this.breakpoint = breakpoint;
    const b = EnumValues.getNameFromValue(BreakPoint, breakpoint);
    this.breakpointString = b;
  }

}
