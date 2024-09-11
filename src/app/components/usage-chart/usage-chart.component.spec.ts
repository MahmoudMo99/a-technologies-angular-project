import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageChartComponent } from './usage-chart.component';

describe('UsageChartComponent', () => {
  let component: UsageChartComponent;
  let fixture: ComponentFixture<UsageChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsageChartComponent]
    });
    fixture = TestBed.createComponent(UsageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
