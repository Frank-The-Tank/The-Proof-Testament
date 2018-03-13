import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolPickerComponent } from './symbol-picker.component';

describe('SymbolPickerComponent', () => {
  let component: SymbolPickerComponent;
  let fixture: ComponentFixture<SymbolPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymbolPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
