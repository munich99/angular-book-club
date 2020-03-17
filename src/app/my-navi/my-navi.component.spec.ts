/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyNaviComponent } from './my-navi.component';

describe('MyNaviComponent', () => {
  let component: MyNaviComponent;
  let fixture: ComponentFixture<MyNaviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNaviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
