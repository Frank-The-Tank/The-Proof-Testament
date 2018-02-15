import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteBoxComponent } from './autocomplete-box.component';

describe('AutocompleteBoxComponent', () => {
  let component: AutocompleteBoxComponent;
  let fixture: ComponentFixture<AutocompleteBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
