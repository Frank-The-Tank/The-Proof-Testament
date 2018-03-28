import { OnInit } from '@angular/core';
import { Theorem } from '../../model/theorem';
export declare class TheoremsListComponent implements OnInit {
    theorems: Theorem[];
    constructor();
    ngOnInit(): void;
    scrollHandler(e: any): void;
    setBackgroundColor(type: any): "#00025c" | "#ee7624";
    ngAfterContentChecked(): void;
}
