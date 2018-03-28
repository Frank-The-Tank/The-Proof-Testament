import { OnDestroy, OnInit } from '@angular/core';
import { EditorService } from '../editor/editor.service';
export declare class EditorFormComponent implements OnInit, OnDestroy {
    private editorService;
    nameText: string;
    classText: string;
    proofText: string;
    descriptionText: string;
    infoFilled: boolean;
    infoFilledSubscription: any;
    customProofSelected: boolean;
    constructor(editorService: EditorService);
    formSubmit(): void;
    onProofSelectionChanged(selection: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
