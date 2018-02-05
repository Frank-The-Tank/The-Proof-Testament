import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoremsListComponent } from './theorems-list.component';

describe('TheoremsListComponent', () => {
  let component: TheoremsListComponent;
  let fixture: ComponentFixture<TheoremsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheoremsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheoremsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
