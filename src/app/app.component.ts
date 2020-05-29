import { Component, OnInit } from '@angular/core';
import { BreakPoint } from 'components';
import { EnumValues } from 'enum-values';
import { Observable } from 'rxjs/Observable';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public value: Observable<string>;

  constructor(
    private swUpdate: SwUpdate,
  ) {

  }

  ngOnInit() {

    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

        if (confirm("New version available. Load New Version?")) {
          window.location.reload();
        }

      });

    }
  }

  breakpoint: BreakPoint;
  breakpointString: string;
  resize(breakpoint: BreakPoint) {
    this.breakpoint = breakpoint;
    const b = EnumValues.getNameFromValue(BreakPoint, breakpoint);
    this.breakpointString = b;
  }

}
