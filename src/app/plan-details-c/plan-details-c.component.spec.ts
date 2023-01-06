import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDetailsCComponent } from './plan-details-c.component';

describe('PlanDetailsCComponent', () => {
  let component: PlanDetailsCComponent;
  let fixture: ComponentFixture<PlanDetailsCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanDetailsCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanDetailsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
