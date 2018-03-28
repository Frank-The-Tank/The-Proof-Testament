import { EventEmitter, ElementRef } from '@angular/core';
export declare class ScrollableDirective {
    el: ElementRef;
    scrollPosition: EventEmitter<{}>;
    constructor(el: ElementRef);
    onScroll(event: any): void;
}
