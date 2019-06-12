import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainTrainingsComponent } from './maintain-trainings.component';

describe('MaintainTrainingsComponent', () => {
  let component: MaintainTrainingsComponent;
  let fixture: ComponentFixture<MaintainTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
