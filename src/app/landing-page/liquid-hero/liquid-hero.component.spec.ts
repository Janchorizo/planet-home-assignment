import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidHeroComponent } from './liquid-hero.component';

describe('LiquidHeroComponent', () => {
  let component: LiquidHeroComponent;
  let fixture: ComponentFixture<LiquidHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
