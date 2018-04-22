import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RstPageComponent } from './rst-page.component';

describe('RstPageComponent', () => {
  let component: RstPageComponent;
  let fixture: ComponentFixture<RstPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RstPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
