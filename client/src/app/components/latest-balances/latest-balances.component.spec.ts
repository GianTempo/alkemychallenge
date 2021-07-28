import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBalancesComponent } from './latest-balances.component';

describe('LatestBalancesComponent', () => {
  let component: LatestBalancesComponent;
  let fixture: ComponentFixture<LatestBalancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestBalancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestBalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
