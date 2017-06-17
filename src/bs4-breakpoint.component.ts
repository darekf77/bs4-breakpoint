import {
    Component, OnInit, ElementRef, Output, NgZone,
    EventEmitter, HostListener, AfterViewInit
} from '@angular/core';

import { BreakPoint } from './bs4-breakpoint.enum';
import { Size } from './size.enum';

@Component({
    selector: 'bs4-breakpoint',
    template: `
        <div class="device-xs hidden-sm-up"></div>
        <div class="device-sm hidden-md-up hidden-xs-down"></div>
        <div class="device-md hidden-lg-up hidden-sm-down"></div>
        <div class="device-lg hidden-xl-up hidden-md-down"></div>
        <div class="device-xl hidden-lg-down"></div>
    `, styles: [':host { display:none; } ']
})
export class Bs4BreakpointsComponent implements AfterViewInit {
    @Output() changed: EventEmitter<BreakPoint> = new EventEmitter<BreakPoint>();
    @Output() resize: EventEmitter<Size> = new EventEmitter<Size>();

    current: BreakPoint = BreakPoint.xl;
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

    isVisible(obj): boolean {
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


    ngAfterViewInit() {
        setTimeout(() => {
            this.onWindowResize();
        })
    }

}
