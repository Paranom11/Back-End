import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelWatchComponent } from './personnel-watch.component';

describe('PersonnelWatchComponent', () => {
  let component: PersonnelWatchComponent;
  let fixture: ComponentFixture<PersonnelWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnelWatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonnelWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
