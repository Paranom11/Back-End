import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWarnComponent } from './login-warn.component';

describe('LoginWarnComponent', () => {
  let component: LoginWarnComponent;
  let fixture: ComponentFixture<LoginWarnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWarnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginWarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
