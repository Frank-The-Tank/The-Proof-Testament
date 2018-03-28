import { OnInit } from '@angular/core';
export declare class AboutComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    contributors: {
        name: string;
        description: string;
        pic: string;
    }[];
}
