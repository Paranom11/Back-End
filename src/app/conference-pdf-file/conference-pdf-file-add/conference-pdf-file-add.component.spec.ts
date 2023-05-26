import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencePdfFileAddComponent } from './conference-pdf-file-add.component';

describe('ConferencePdfFileAddComponent', () => {
  let component: ConferencePdfFileAddComponent;
  let fixture: ComponentFixture<ConferencePdfFileAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferencePdfFileAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConferencePdfFileAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
