import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDota2Component } from './heroes-dota2.component';

describe('HeroesDota2Component', () => {
  let component: HeroesDota2Component;
  let fixture: ComponentFixture<HeroesDota2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesDota2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesDota2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
