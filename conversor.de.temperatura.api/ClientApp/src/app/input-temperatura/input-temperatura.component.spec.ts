import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTemperaturaComponent } from './input-temperatura.component';

describe('InputTemperaturaComponent', () => {
  let component: InputTemperaturaComponent;
  let fixture: ComponentFixture<InputTemperaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTemperaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
