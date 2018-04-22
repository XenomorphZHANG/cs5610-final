import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RstEditComponent } from './rst-edit.component';

describe('RstEditComponent', () => {
  let component: RstEditComponent;
  let fixture: ComponentFixture<RstEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RstEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RstEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
