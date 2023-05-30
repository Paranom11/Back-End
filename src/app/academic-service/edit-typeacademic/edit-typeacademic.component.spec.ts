import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeacademicComponent } from './edit-typeacademic.component';

describe('EditTypeacademicComponent', () => {
  let component: EditTypeacademicComponent;
  let fixture: ComponentFixture<EditTypeacademicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTypeacademicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTypeacademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
