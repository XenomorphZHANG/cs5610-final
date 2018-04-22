import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RstNewComponent } from './rst-new.component';

describe('RstNewComponent', () => {
  let component: RstNewComponent;
  let fixture: ComponentFixture<RstNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RstNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RstNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
