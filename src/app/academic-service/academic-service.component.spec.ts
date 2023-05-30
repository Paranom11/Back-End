import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicServiceComponent } from './academic-service.component';

describe('AcademicServiceComponent', () => {
  let component: AcademicServiceComponent;
  let fixture: ComponentFixture<AcademicServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
