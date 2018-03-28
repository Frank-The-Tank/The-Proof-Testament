import { OnInit } from '@angular/core';
import { EditorService } from '../editor/editor.service';
export declare class HomeComponent implements OnInit {
    private editorService;
    infoFilled: boolean;
    constructor(editorService: EditorService);
    ngOnInit(): void;
}
