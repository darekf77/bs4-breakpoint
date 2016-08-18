import { Component, OnInit, ElementRef, Output, NgZone, EventEmitter } from '@angular/core';

import { Bs4BreakPoint } from './bs4-breakpoints.enum';
import { Size } from './size.enum';

@Component({
    selector: 'bs4-breakpoints',
    template: `
        <div class="device-xs hidden-sm-up"></div>
        <div class="device-sm hidden-md-up hidden-xs-down"></div>
        <div class="device-md hidden-lg-up hidden-sm-down"></div>
        <div class="device-lg hidden-xl-up hidden-md-down"></div>
        <div class="device-xl hidden-lg-down"></div>
    `, styles: [':host { display:none; } ']
})
export class Bs3BreakpointsComponent implements OnInit {
    @Output() changed: EventEmitter<Bs3BreakPoint> = new EventEmitter<Bs3BreakPoint>();
    @Output() resize: EventEmitter<Size> = new EventEmitter<Size>();

    current: Bs4BreakPoint = Bs4BreakPoint.xl;
    width: number;
    height: number;
    constructor(private e: ElementRef, ngZone: NgZone) {

        this.changed.next(this.current);
        window.onresize = () => {
            ngZone.run(() => {

                this.width = window.innerWidth;
                this.height = window.innerHeight;
                if (this.check()) {
                    this.changed.next(this.current);
                }
                this.resize.next({ width: this.width, height: this.height });
            });
        };
    }


    isVisible(obj): boolean {
        let style = window.getComputedStyle(obj, undefined);
        return style.display === 'block';
    }

    check(): boolean {
        let t;
        if (this.isVisible(this.e.nativeElement.children[0])) {
            t = Bs4BreakPoint.xs;
        }
        if (this.isVisible(this.e.nativeElement.children[1])) {
            t = Bs4BreakPoint.sm;
        }
        if (this.isVisible(this.e.nativeElement.children[2])) {
            t = Bs4BreakPoint.md;
        }
        if (this.isVisible(this.e.nativeElement.children[3])) {
            t = Bs4BreakPoint.lg;
        }
        if (this.isVisible(this.e.nativeElement.children[4])) {
            t = Bs4BreakPoint.xl;
        }
        if (t !== this.current) {
            this.current = t;
            return true;
        }

        return false;
    }


    ngOnInit() { }

}
