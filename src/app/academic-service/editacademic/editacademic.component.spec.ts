import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditacademicComponent } from './editacademic.component';

describe('EditacademicComponent', () => {
  let component: EditacademicComponent;
  let fixture: ComponentFixture<EditacademicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditacademicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditacademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
