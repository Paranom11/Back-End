import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencePdfFileEditComponent } from './conference-pdf-file-edit.component';

describe('ConferencePdfFileEditComponent', () => {
  let component: ConferencePdfFileEditComponent;
  let fixture: ComponentFixture<ConferencePdfFileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferencePdfFileEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConferencePdfFileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
