/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RastreioSeparadoComponent } from './rastreio-separado.component';

describe('RastreioSeparadoComponent', () => {
  let component: RastreioSeparadoComponent;
  let fixture: ComponentFixture<RastreioSeparadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RastreioSeparadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RastreioSeparadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
