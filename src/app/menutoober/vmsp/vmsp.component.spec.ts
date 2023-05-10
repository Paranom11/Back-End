import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMSPComponent } from './vmsp.component';

describe('VMSPComponent', () => {
  let component: VMSPComponent;
  let fixture: ComponentFixture<VMSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VMSPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VMSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
