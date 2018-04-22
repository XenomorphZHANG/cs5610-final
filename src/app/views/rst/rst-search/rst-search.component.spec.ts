import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RstSearchComponent } from './rst-search.component';

describe('RstSearchComponent', () => {
  let component: RstSearchComponent;
  let fixture: ComponentFixture<RstSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RstSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RstSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
