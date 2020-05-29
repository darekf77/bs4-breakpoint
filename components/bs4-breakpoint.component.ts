import {
  Component, OnInit, ElementRef, Output, NgZone,
  EventEmitter, HostListener, AfterViewInit
} from '@angular/core';

import { BreakPoint } from './bs4-breakpoint.enum';
import { Size } from './size.enum';

@Component({
  selector: 'bs4-breakpoint',
  template: `
          <span class='xs d-block d-sm-inline'></span>
          <span class='sm d-sm-block d-md-inline'> </span>
          <span class='md d-md-block d-lg-inline'></span>
          <span class='lg d-lg-block d-xl-inline'></span>
          <span class='xl d-xl-block'></span>
    `, styles: [':host { display:none; } ']
})
export class Bs4BreakpointsComponent implements AfterViewInit {
  @Output() changed: EventEmitter<BreakPoint> = new EventEmitter<BreakPoint>();
  @Output() resize: EventEmitter<Size> = new EventEmitter<Size>();

  current: BreakPoint;
  width: number;
  height: number;
  constructor(private e: ElementRef) { }


  @HostListener('window:resize')
  onWindowResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    if (this.check()) {
      this.changed.emit(this.current);
    }
    this.resize.emit({ width: this.width, height: this.height });
  }

  isVisible(obj: Element): boolean {
    let style = window.getComputedStyle(obj, undefined);
    return style.display === 'block';
  }

  check(): boolean {
    let t;
    if (this.isVisible(this.e.nativeElement.children[0])) {
      t = BreakPoint.xs;
    }
    if (this.isVisible(this.e.nativeElement.children[1])) {
      t = BreakPoint.sm;
    }
    if (this.isVisible(this.e.nativeElement.children[2])) {
      t = BreakPoint.md;
    }
    if (this.isVisible(this.e.nativeElement.children[3])) {
      t = BreakPoint.lg;
    }
    if (this.isVisible(this.e.nativeElement.children[4])) {
      t = BreakPoint.xl;
    }
    if (t !== this.current) {
      this.current = t;
      return true;
    }

    return false;
  }

  ngOnInit(): void {
    if (this.check()) {
      this.changed.emit(this.current);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.onWindowResize();
    })
  }

}
