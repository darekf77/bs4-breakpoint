## bs4-breakpoint ##


Detect breakpoint in bootstrap 4  :

How to use it
-------------

**import it**

    import {  Bs4BreakPoint, Bs4Breakpoint } from "bs4-breakpoint/bs4-breakpoint";

**include it**

    ...
    directives: [Bs4BreakpointsComponent]
    ...

function in class component

    newBreakpoint(e: Bs4BreakPoint) {
          // breakpoint detected
    }

in html:

    <bs4-breakpoints (changed)="newBreakpoint($event)" ></bs4-breakpoints>


