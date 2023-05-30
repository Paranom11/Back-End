import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationofpapersComponent } from './publicationofpapers.component';

describe('PublicationofpapersComponent', () => {
  let component: PublicationofpapersComponent;
  let fixture: ComponentFixture<PublicationofpapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationofpapersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationofpapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
