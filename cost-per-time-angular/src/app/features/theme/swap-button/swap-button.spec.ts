import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapButton } from './swap-button';

describe('SwapButton', () => {
  let component: SwapButton;
  let fixture: ComponentFixture<SwapButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwapButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwapButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
