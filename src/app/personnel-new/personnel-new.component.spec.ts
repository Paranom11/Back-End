import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelNewComponent } from './personnel-new.component';

describe('PersonnelNewComponent', () => {
  let component: PersonnelNewComponent;
  let fixture: ComponentFixture<PersonnelNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnelNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonnelNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
