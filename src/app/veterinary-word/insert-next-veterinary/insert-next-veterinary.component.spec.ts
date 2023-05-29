import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNextVeterinaryComponent } from './insert-next-veterinary.component';

describe('InsertNextVeterinaryComponent', () => {
  let component: InsertNextVeterinaryComponent;
  let fixture: ComponentFixture<InsertNextVeterinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertNextVeterinaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertNextVeterinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
