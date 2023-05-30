import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeacademicComponent } from './add-typeacademic.component';

describe('AddTypeacademicComponent', () => {
  let component: AddTypeacademicComponent;
  let fixture: ComponentFixture<AddTypeacademicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeacademicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypeacademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
