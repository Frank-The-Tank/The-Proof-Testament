import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntlrComponent } from './antlr.component';

describe('AntlrComponent', () => {
  let component: AntlrComponent;
  let fixture: ComponentFixture<AntlrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntlrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntlrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
