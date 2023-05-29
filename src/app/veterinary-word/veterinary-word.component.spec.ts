import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaryWordComponent } from './veterinary-word.component';

describe('VeterinaryWordComponent', () => {
  let component: VeterinaryWordComponent;
  let fixture: ComponentFixture<VeterinaryWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinaryWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterinaryWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
