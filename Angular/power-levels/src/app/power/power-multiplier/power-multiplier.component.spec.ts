import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerMultiplierComponent } from './power-multiplier.component';

describe('PowerMultiplierComponent', () => {
  let component: PowerMultiplierComponent;
  let fixture: ComponentFixture<PowerMultiplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerMultiplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerMultiplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
