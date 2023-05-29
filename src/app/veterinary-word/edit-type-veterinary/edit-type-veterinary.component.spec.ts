import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeVeterinaryComponent } from './edit-type-veterinary.component';

describe('EditTypeVeterinaryComponent', () => {
  let component: EditTypeVeterinaryComponent;
  let fixture: ComponentFixture<EditTypeVeterinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTypeVeterinaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTypeVeterinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
