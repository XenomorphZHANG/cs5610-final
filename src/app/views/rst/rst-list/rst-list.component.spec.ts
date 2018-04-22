import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RstListComponent } from './rst-list.component';

describe('RstListComponent', () => {
  let component: RstListComponent;
  let fixture: ComponentFixture<RstListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RstListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RstListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
