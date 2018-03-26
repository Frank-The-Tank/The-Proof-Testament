import { TestBed, inject } from '@angular/core/testing';

import { SymbolPickerService } from './symbol-picker.service';

describe('SymbolPickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SymbolPickerService]
    });
  });

  it('should be created', inject([SymbolPickerService], (service: SymbolPickerService) => {
    expect(service).toBeTruthy();
  }));
});
