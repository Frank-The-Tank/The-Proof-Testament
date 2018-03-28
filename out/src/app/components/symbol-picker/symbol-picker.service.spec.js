"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const symbol_picker_service_1 = require("./symbol-picker.service");
describe('SymbolPickerService', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [symbol_picker_service_1.SymbolPickerService]
        });
    });
    it('should be created', testing_1.inject([symbol_picker_service_1.SymbolPickerService], (service) => {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=symbol-picker.service.spec.js.map