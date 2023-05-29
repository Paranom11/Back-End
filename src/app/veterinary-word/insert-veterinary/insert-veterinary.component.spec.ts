import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertVeterinaryComponent } from './insert-veterinary.component';

describe('InsertVeterinaryComponent', () => {
  let component: InsertVeterinaryComponent;
  let fixture: ComponentFixture<InsertVeterinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertVeterinaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertVeterinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
