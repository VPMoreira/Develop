/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RastreioEntregueComponent } from './rastreio-entregue.component';

describe('RastreioEntregueComponent', () => {
  let component: RastreioEntregueComponent;
  let fixture: ComponentFixture<RastreioEntregueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RastreioEntregueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RastreioEntregueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
