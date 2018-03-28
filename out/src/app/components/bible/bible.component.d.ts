import { OnInit } from '@angular/core';
import { BibleService } from './bible.service';
import { Theorem } from '../../model/theorem';
import { ElementRef } from '@angular/core';
export declare class BibleComponent implements OnInit {
    private service;
    allTheorems: Theorem[];
    filtered: Theorem[];
    elementView: ElementRef;
    constructor(service: BibleService);
    ngOnInit(): void;
    search(search: string): void;
}
