import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencePdfFileComponent } from './conference-pdf-file.component';

describe('ConferencePdfFileComponent', () => {
  let component: ConferencePdfFileComponent;
  let fixture: ComponentFixture<ConferencePdfFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferencePdfFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConferencePdfFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
