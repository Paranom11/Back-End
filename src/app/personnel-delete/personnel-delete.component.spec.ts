import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelDeleteComponent } from './personnel-delete.component';

describe('PersonnelDeleteComponent', () => {
  let component: PersonnelDeleteComponent;
  let fixture: ComponentFixture<PersonnelDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnelDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonnelDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
