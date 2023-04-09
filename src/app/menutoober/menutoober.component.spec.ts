import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutooberComponent } from './menutoober.component';

describe('MenutooberComponent', () => {
  let component: MenutooberComponent;
  let fixture: ComponentFixture<MenutooberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenutooberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenutooberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
