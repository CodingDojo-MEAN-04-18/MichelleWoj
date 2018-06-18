import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaGammaComponent } from './beta-gamma.component';

describe('BetaGammaComponent', () => {
  let component: BetaGammaComponent;
  let fixture: ComponentFixture<BetaGammaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetaGammaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaGammaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
